console.log("working");

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } 
        ] 
let a=[
    studentRecords[0].name.toUpperCase(),
    studentRecords[1].name.toUpperCase(),
    studentRecords[2].name.toUpperCase(),
    studentRecords[3].name.toUpperCase()
];
console.log(a);

let b=[];
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].marks>50){
         b.push(studentRecords[i]);
     }
 }
 console.log(b);

 let c=[];
 for(let i=0;i<studentRecords.length;i++){
     if((studentRecords[i].marks>50)&&(studentRecords[i].id>120)){
         c.push(studentRecords[i]);
     }
 }
 console.log(c); 

 let sum=0;
 for(let i=0;i<studentRecords.length;i++){
     sum+=studentRecords[i].marks;       
     
 }
 console.log(sum);

 let d=[];
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].marks>50){
         d.push(studentRecords[i].name);
     }
 }
 console.log(d);

 let total=0;
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].id>120){
         total+=studentRecords[i].marks;
     }
 }
 console.log(total);

let total1=0;
for(let i=0;i<studentRecords.length;i++){
    if((studentRecords[i].marks<50)){
        studentRecords[i].marks+= 15;
    }
    if(studentRecords[i].marks>50){
        total1+=studentRecords[i].marks;
    }
}
console.log(total1);

function Student(Name,Class,RollNo){
    this.Name=Name;
    this.Class=Class;
    this.RollNo=RollNo;
}
let j1= new Student("jay",10,15);
let j2= new Student("adi",9,14);
let j3= new Student("rio",11,16);
let j4= new Student("tia",12,17);
let j5= new Student("deny",8,13);
let j6= new Student("rahul",9,14);
let array=[];
array.push(j1);
array.push(j2);
array.push(j3);
array.push(j4);
array.push(j5);
array.push(j6);
console.log(array);