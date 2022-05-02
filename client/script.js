(function(){
    window.addEventListener("load",loadEvents);
    var target;
    function loadEvents() {
        localStorage.setItem("location-X-A", 683)
        localStorage.setItem("location-Y-A", 331)
        target = new Target();
        var el = document.getElementsByClassName("button");

        for(var i = 0; i < el.length; i++) {
            el[i].addEventListener('mousedown', moveTarget);
        }
    }
    function moveTarget(el) {
        var value =  parseInt(document.getElementById("value").value || 10);
        var elValue = this.innerHTML;

        if(elValue == "Up") {
            target.Up(value,"top");

            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))
            console.log(radius)

            if(radius >= 100) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageB").innerHTML = 'The other device is going away!'
            )
            }
            document.getElementById("locationA").innerHTML = "(" + localStorage.getItem("location-X-A") + "," + localStorage.getItem("location-Y-A") + ")"


        } else if (elValue == "Right")  {
            target.Right(value,"left"); 


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))
            console.log(radius)

            if(radius >= 150) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageB").innerHTML = 'The other device is going away!'
            )
            }


            document.getElementById("locationA").innerHTML = "(" + localStorage.getItem("location-X-A") + "," + localStorage.getItem("location-Y-A") + ")"

        } else if (elValue == "Left")   {
            target.Left(value,"left");


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))
            console.log(radius)

            if(radius >= 310) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageB").innerHTML = 'The other device is going away!'
            )
            }


            document.getElementById("locationA").innerHTML = "(" + localStorage.getItem("location-X-A") + "," + localStorage.getItem("location-Y-A") + ")"

        } else if (elValue == "Down" )  {
            target.Down(value,"top");


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))
            console.log(radius)

            if(radius >= 50) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageB").innerHTML = 'Another device is near your!'
            )
            }



            document.getElementById("locationA").innerHTML = "(" + localStorage.getItem("location-X-A") + "," + localStorage.getItem("location-Y-A") + ")"

        }
    }
})();


//   object 2

(function(){
    window.addEventListener("load",loadEvents);
    localStorage.setItem("location-X-B", 683)
    localStorage.setItem("location-Y-B", 331)
    var target;
    function loadEvents() {
        target = new Target2();
        var el = document.getElementsByClassName("button2");

        for(var i = 0; i < el.length; i++) {
            el[i].addEventListener('mousedown', moveTarget);
        }
    }
    function moveTarget(el) {
        var value =  parseInt(document.getElementById("value2").value || 10);
        var elValue = this.innerHTML;

        if(elValue == "Up") {
            target.Up(value,"top");

            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const totalDistanceB= localStorage.getItem("location-X-B")
            document.getElementById("distanceB").innerHTML = totalDistanceB

            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))
            console.log(radius)

            if(radius >= 50) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageA").innerHTML = 'Another device is near your!'
            )
            }

            document.getElementById("locationB").innerHTML = "(" + localStorage.getItem("location-X-B") + "," + localStorage.getItem("location-Y-B") + ")"

        } else if (elValue == "Right")  {
            target.Right(value,"left"); 


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))

            if(radius >= 300) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageA").innerHTML = 'The other device is going away!'
            )
            }


            document.getElementById("locationB").innerHTML = "(" + localStorage.getItem("location-X-B") + "," + localStorage.getItem("location-Y-B") + ")"

        } else if (elValue == "Left")   {
            target.Left(value,"left");


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))

            if(radius >= 310) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageA").innerHTML = 'The other device is going away!'
            )
            }


            document.getElementById("locationB").innerHTML = "(" + localStorage.getItem("location-X-B") + "," + localStorage.getItem("location-Y-B") + ")"

        } else if (elValue == "Down" )  {
            target.Down(value,"top");


            // notification

            const deffrenceOfY = localStorage.getItem("location-Y-B") - localStorage.getItem("location-Y-A")
            const deffrenceOfX= localStorage.getItem("location-X-B") - localStorage.getItem("location-X-A")
            const radius = Math.sqrt(Math.pow(deffrenceOfY, 2) + Math.pow(deffrenceOfX, 2))

            if(radius >= 100) {
            fetch ('http://localhost:7000/api/notify')
            .then(
                console.log(radius),
                document.getElementById("messageA").innerHTML = 'The other device is going away!'
            )
            }


            document.getElementById("locationB").innerHTML = "(" + localStorage.getItem("location-X-B") + "," + localStorage.getItem("location-Y-B") + ")"

        }
    }
})();




