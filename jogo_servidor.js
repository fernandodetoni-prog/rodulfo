require("dotenv").config();
const nome_do_mapa = process.env.nome_do_mapa;
const MULTIPLICADOR = parseInt(process.env.MULTIPLICADOR);
const modo_do_jogo = process.env.modo_do_jogo;

console.log(`\n=== SERVIDOR ONLINE ===`);
console.log(`mapa atual: ${nome_do_mapa}`);

if (modo_do_jogo === "MANUTENCAO") {
    console.log("STATUS: Servidor fechado para reparos. erro 503.");
}else if (modo_do_jogo === "EVENTO") {
    console.log(`STATUS: EVENTO ATIVO! Seu xp total modificado será: ${MULTIPLICADOR* 2}`);
}else {
console.log(`STATUS: jogando normalmente, xp padrão: ${MULTIPLICADOR}`);
}