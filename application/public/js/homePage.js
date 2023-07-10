
fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
    .then(response => response.json()) // respnse is the return from the promist but it is just and object that must be converted to json
    .then(data => {
        // console.log(data);

        for(let i = 0; i < 50; i++){
            var cc = document.createElement('div');
            cc.className = "pepper"; // store image and title 

            var pp = document.createElement('p');
            pp.className="title";
            pp.innerHTML = data[i].title;

            var img = document.createElement('img');    // I created an img element
            img.src=data[i].url;   // added into the attribute
            img.className="image";

            cc.appendChild(img);
            cc.appendChild(pp);
            document.getElementById('image-container').appendChild(cc);

        }
        var counter = document.createElement("div");
        counter.className = "counter";
        numImages = data.length;
        var count = numImages;
        console.log(count);
        counter.innerHTML = count;
        document.body.appendChild(counter);
        
        document.addEventListener('click', remove);

        // function remove(e){
        //     count -= 1;
        //     counter.innerHTML = count;
        //     e.target.style.opacity = '0';
        //     e.target.parentNode.remove();
        //     console.log(count);

        // }

        function remove(e){
            e.target.style.opacity = 0;
            setTimeout(()=>{
                e.target.parentNode.remove();
                count -= 1;
                counter.innerHTML = count;
                e.target.style.opacity = '0';
                e.target.parentNode.remove();
                console.log(count);
            }, 1000);            
        }
        
        


    });

   

    // Info should be in DOM already so you can access it through the dom


