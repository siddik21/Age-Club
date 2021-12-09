const lfwf=[
    {
        name: 'Abu Bakkar Siddik',
        department: 'React',
        location: 'Dinajpur',
        age: 25
    },
    {
        name: 'Delwar Hossain',
        department: 'Wordpress',
        location: 'Thakurgaon',
        age: 42
    },
    {
        name: 'Khalekujjaman Akash',
        department: 'Laravel',
        location: 'Rajbari',
        age: 17
    },
    {
        name: 'Pijus Kormokar',
        department: 'Wordpress',
        location: 'Noyakhali',
        age: 24
    },
    {
        name: 'Ridam Pal',
        department: 'React',
        location: 'Adabor',
        age: 100
    },
    {
        name: 'Akram Hossain',
        department: 'Java Script',
        location: 'Borishal',
        age: 38
    },
    {
        name: 'Araf Chowdhury',
        department: 'ACO',
        location: 'Jhinaidoho',
        age: 200
    },
    {
        name: 'Emon Khan',
        department: 'PHP',
        location: 'Kustia',
        age: 14
    },
    {
        name: 'JR Akash',
        department: 'HTML',
        location: 'Meherpur',
        age: 39
    },
    {
        name: 'Manik',
        department: 'Java Script',
        location: 'Kaharol',
        age: 50
    }
]


lfwf.map( data => {
    if(data.age >= 00 && data.age<18){
        console.log(`
        Name: ${data.name}
        Department: ${data.department}
        Location: ${data.location}
        Age: ${data.age}
        Oh Sorry Apnar Akhono Boyos Hoini Amader Club Er Member Hoar Moto.
        `)
    }
});
console.log(`************************************************************************************`);

lfwf.map( data => {
    if(data.age >= 18 && data.age < 40){
        console.log(`
        Name: ${data.name}
        Department: ${data.department}
        Location: ${data.location}
        Age: ${data.age}
        Welcome, Amader Club a asar jonno Ovinondon. Vitore Probes Korun.
        `)
    }
});
console.log(`************************************************************************************`);

lfwf.map( data => {
    if(data.age >= 40){
        console.log(`
        Name: ${data.name}
        Department: ${data.department}
        Location: ${data.location}
        Age: ${data.age}
        Thank You So Much, Amader Sathe Atota Poth Otikrom Korar Jonne.
        `)
    }
});
console.log(`************************************************************************************`)