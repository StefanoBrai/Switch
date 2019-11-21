(function () {
    function switcha() {
        let names = ["Simone G", "Giulia O", "Andrea B", "Andrea C", "Andrea G", "Lorena S", "Elia G", "Stefano M", "Stefano B", "Alberto D", "Paolo I"];
        //var rand = names[Math.floor(Math.random()* names.length)];
        //var rand = shuffle(names);

        function shuffle(names) {
            for (let index = names.length - 1; index > 0; index--) {
                const rand = Math.floor(Math.random() * (index + 1));
                [names[index], names[rand]] = [names[rand], names[index]];
            }
            return names;
        }
        shuffle(names);

        const name1 = document.getElementById("name1");
        const name2 = document.getElementById("name2");
        const name3 = document.getElementById("name3");
        const name4 = document.getElementById("name4");
        const name5 = document.getElementById("name5");
        const name6 = document.getElementById("name6");
        const name7 = document.getElementById("name7");
        const name8 = document.getElementById("name8");
        const name9 = document.getElementById("name9");
        const name10 = document.getElementById("name10");
        const name11 = document.getElementById("name11");

        name1.innerHTML = `${names[0]}`;
        name2.innerHTML = `${names[1]}`;
        name3.innerHTML = `${names[2]}`;
        name4.innerHTML = `${names[3]}`;
        name5.innerHTML = `${names[4]}`;
        name6.innerHTML = `${names[5]}`;
        name7.innerHTML = `${names[6]}`;
        name8.innerHTML = `${names[7]}`;
        name9.innerHTML = `${names[8]}`;
        name10.innerHTML = `${names[9]}`;
        name11.innerHTML = `${names[10]}`;


    }
    const button = document.querySelector("input[type = submit]");
    button.addEventListener("click", switcha);
})()