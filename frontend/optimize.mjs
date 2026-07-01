import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/assets';

function getFiles(dirPath) {
    let results = [];
    const list = fs.readdirSync(dirPath);
    list.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (fullPath.endsWith('.png') || fullPath.endsWith('.jpg') || fullPath.endsWith('.jpeg')) {
            results.push(fullPath);
        }
    });
    return results;
}

async function optimizeImages() {
    console.log('Iniciando otimização das imagens maiores que 1MB...');
    const files = getFiles(dir);
    for (const file of files) {
        const stat = fs.statSync(file);
        const mb = stat.size / (1024 * 1024);
        
        // Só otimiza arquivos maiores que 1MB
        if (mb > 1) {
            console.log(`Otimizando: ${file} (${mb.toFixed(2)} MB)`);
            const tempFile = file + '.tmp';
            
            try {
                const image = sharp(file);
                const metadata = await image.metadata();
                
                // Redimensiona mantendo a proporção para no máximo 2500px (ainda é gigantesco e qualidade 4K)
                let width = metadata.width;
                if (width > 2500) {
                    width = 2500;
                }

                if (file.endsWith('.png')) {
                    await image
                        .resize({ width, withoutEnlargement: true })
                        .png({ compressionLevel: 9, effort: 10, quality: 90 }) 
                        .toFile(tempFile);
                } else {
                    await image
                        .resize({ width, withoutEnlargement: true })
                        .jpeg({ quality: 90 })
                        .toFile(tempFile);
                }

                fs.renameSync(tempFile, file);
                
                const newStat = fs.statSync(file);
                const newMb = newStat.size / (1024 * 1024);
                console.log(`  -> Finalizado: ${newMb.toFixed(2)} MB`);
            } catch (err) {
                console.error(`Erro ao processar ${file}:`, err);
            }
        }
    }
    console.log('Otimização concluída!');
}

optimizeImages();
