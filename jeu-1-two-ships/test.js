import {
  randFloatSpread, 
  mapLinear, 
  lerp, 
  clamp, 
  randFloat} from './src/math.js';

let erreurs = 0;
const test1 = randFloatSpread(1);
const test2 = randFloatSpread(1);
const test3 = mapLinear(1, 2, 3, 4, 5);
const test4 = mapLinear(1, 20, 3, 40, 5);
const test5 = lerp(1, 3, 20);
const test6 = lerp(1.3, -7, 2);


// prépare le test pour un chiffre normal
const test7 = clamp(5, 0, 10);
// simule le franchissement du plafond
const test8 = clamp(15, 0, 10);
// simule la descente sous le plancher
const test9 = clamp(-5, 0, 10);
// lance la génération aléatoire entre cinq et dix
const test10 = randFloat(5, 10);
// effectue une seconde passe avec les mêmes limites
const test11 = randFloat(5, 10);


if (!(test1 <= 1)) {
  // cible la ligne du fichier de test
  console.log(`::error file=test.js,line=12::` +
    `randFloatSpread(1) <= 1 a échoué. Résultat : ${test1}`);
  // cible le fichier source math.js à la ligne 10
  console.log(`::error file=src/math.js,line=10::
    erreur dans la fonction randFloatSpread`);
  // ajoute une erreur au compteur
  erreurs++;
}

if (!(test2 >= -1)) {
  console.log(`::error file=test.js,line=19::` +
    `randFloatSpread(1) >= -1 a échoué. Résultat : ${test2}`);
  console.log(`::error file=src/math.js,line=10::
    la fonction randFloatSpread ne respecte pas la limite >= -1`);
  erreurs++;
}

if (test3 !== 3) {
  console.log(`::error file=test.js,line=26::` +
    `mapLinear(1,2,3,4,5) a échoué. Attendu 3, reçu : ${test3}`);
  console.log(`::error file=src/math.js,line=5::
    le calcul de mapLinear est incorrect pour des entiers`);
  erreurs++;
}

if (test4 !== 0.882352941176471) {
  console.log(`::error file=test.js,line=33::` +
    `mapLinear(1,20,3,40,5) a échoué. Reçu : ${test4}`);
  console.log(`::error file=src/math.js,line=5::
    le résultat décimal de mapLinear est faux`);
  erreurs++;
}

if (test5 !== 41) {
  console.log(`::error file=test.js,line=40::` +
    `lerp(1,3,20) a échoué. Attendu 41, reçu : ${test5}`);
  console.log(`::error file=src/math.js,line=3::
    l'interpolation linéaire retourne une mauvaise valeur`);
  erreurs++;
}

if (test6 !== -15.3) {
  console.log(`::error file=test.js,line=47::` +
    `lerp(1.3,-7,2) a échoué. Attendu -15.3, reçu : ${test6}`);
  console.log(`::error file=src/math.js,line=3::
    problème avec lerp et les nombres négatifs`);
  erreurs++;
}

if (test7 !== 5) {
  console.log(`::error file=test.js,line=55::` +
    `clamp(5,0,10) a échoué. Attendu 5, reçu : ${test7}`);
  console.log(`::error file=src/math.js,line=1::
    la fonction clamp modifie une valeur déjà valide`);
  erreurs++;
}

if (test8 !== 10) {
  console.log(`::error file=test.js,line=62::` +
    `clamp(15,0,10) a échoué. Attendu 10, reçu : ${test8}`);
  console.log(`::error file=src/math.js,line=1::
    la fonction clamp ne bloque pas le plafond maximum`);
  erreurs++;
}

if (test9 !== 0) {
  console.log(`::error file=test.js,line=69::` +
    `clamp(-5,0,10) a échoué. Attendu 0, reçu : ${test9}`);
  console.log(`::error file=src/math.js,line=1::
    la fonction clamp ne bloque pas le plancher minimum`);
  erreurs++;
}

if (test10 < 5) {
  console.log(`::error file=test.js,line=76::` +
    `randFloat(5,10) a échoué. Reçu : ${test10}`);
  console.log(`::error file=src/math.js,line=8::
    la fonction randFloat génère un nombre sous le plancher`);
  erreurs++;
}

if (test11 > 10) {
  console.log(`::error file=test.js,line=83::` +
    `randFloat(5,10) a échoué. Reçu : ${test11}`);
  console.log(`::error file=src/math.js,line=8::
    la fonction randFloat génère un nombre au-dessus du plafond`);
  erreurs++;
}
if (erreurs > 0) {
  process.exit(1);
} else {
  console.log('Tous les tests sont passés avec succès.');
  process.exit(0);
}
