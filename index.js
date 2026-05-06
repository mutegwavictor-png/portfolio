// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ===== Dark Mode Toggle =====
const darkBtn = document.getElementById('dark');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkBtn.textContent = document.body.classList.contains('light-mode')
      ? 'dark mode'
      : 'dark mode';
  });
}

// // switches

// let day = 2;

// switch(day){
//     case 1:
//         console.log('monday')
//         break
//     case 2:
//         console.log('tuesday')
//         break
//     case 3:
//         console.log('wenesday')
//         break
//     case 4:
//         console.log('thursday')
//         break
//     case 5 :
//         console.log('friday')
//         break
//     case 6:
//         console.log('saturday')
//         break
//     case 7:
//         console.log ('sunday')
//     default:console.log('input a day')
// }


// grade system

// let grade = 70;
// let lettergrade;

// switch(true){
//     case grade>=90 :
//         lettergrade = "A"
//         break
//     case grade >=80:
//     lettergrade ='A-'
//     break
//     case grade >=70 :
//         lettergrade = 'B'
//         break
//     case grade>= 60 : 
//         lettergrade = "B-"
//         break

// }

//  console.log(lettergrade)


//  let price= 120;
//  let discount =price >=100 ? '100': "0"

// console.log(`your total is ${price*(discount/100)}`)

// // slicing

// const name= "victor mutegwa"

// let fname =name.slice(0,name.indexOf(" "));

// let lnaame =name.slice(name.indexOf(" ")+1);
//  console.log(fname)

//  console.log(lnaame)


let name = '  aLLan';
name = name.trim("  ").charAt(0).toUpperCase() + name.trim('').slice(1).toLowerCase()

console.log(name)