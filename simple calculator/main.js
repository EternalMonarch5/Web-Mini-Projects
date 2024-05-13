while(1){
  let choice = parseInt(prompt("-----------SIMPLE CALCULATOR-------------\n\n\n----------Enter the operation:-----------------\n1.ADDITION\n 2.SUBTRACTION \n 3.DIVISION\n 4.MULTIPLICATION"));
  switch(choice){
      case 1:let a=parseInt(prompt("Enter a:"));
             let b=parseInt(prompt("Enter b:"));
             sum=a+b;
             alert(sum);
             break;
           
       case 2:let c=parseInt(prompt("Enter a:"));
              let d=parseInt(prompt("Enter b:"));
              sub=c-d;
              alert(sub);
              break;
           
       case 3:let e=parseInt(prompt("Enter a:"));
              let f=parseInt(prompt("Enter b:"));
              div=e/f;
              alert(div);
              break;
           
       case 4:let g=parseInt(prompt("Enter a:"));
              let h=parseInt(prompt("Enter b:"));
              mul=g*h;
              alert(mul);
             break;

        default:alert("please!Enter correct choice (1-4):");       
   }
}