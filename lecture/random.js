// // 랜덤 숫자 뽑는함수
function randomFunc(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

// // 뽑은 번호 담을 배열 준비
// let lottoArr = [];
// // 6개 뽑아서 lottoArr에 담는함수
// function lottoGenerator() {
//     // 배열이 꽉차기 전까지 반복 (6개 까지)
//     while (lottoArr.length < 6) {
//         let result = randomFunc(1, 46);
//         // 중복 판단하기위해 필요한 변수
//         let isGot = false;

//         // 중복 판단
//         // lottoArr 의 요소를 순회
//         lottoArr.forEach((element) => {
//             // 요소가 result 와 같다면 중복!
//             if (element === result) {
//                 // 중복됐다고 표시!
//                 isGot = true;
//             }
//         });

//         // 중복이 안되었다면 배열에 뽑은숫자 추가 (중복이 되었다면 if문에 못들어가서 추가하지않음) 
//         if (!isGot) {
//             lottoArr.push(result);
//         }
//     }
//     // 여기에 도달했을땐 배열이 꽉~채워짐
//     return lottoArr;
// }
// console.log(lottoGenerator());
// let lottoArr = [];
let lottoSet = new Set();
function lottoGenerator() {

    while (lottoSet.size < 6) {

        let result = randomNum(1, 46);
        // let isGot = false;
        lottoSet.add(result);
        // 중복 판단
        // lottoArr.forEach(element => {
        //     if (element === result) {
        //         isGot = true;
        //     }
        // });

        // 중복이 없다면 배열에 추가
        // if (!isGot) {
        //     lottoArr.push(result);
        // }

        // if (!lottoArr.includes(result)) {
        //     lottoArr.push(result);
        // }
    }
    return lottoSet;
}