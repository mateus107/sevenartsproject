
 window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
          document.getElementById("navbar").style.top = "0";
      } else {
          document.getElementById("navbar").style.top = "-50px";
      }
    }

//bolinhas
// cores aleatorias


		const colors = ["#44279E", "#C52A1C", "#80D8FF", "#7AB340", "#F29210"];

		const numBalls = 50;
		const balls = [];

		for (let i = 0; i < numBalls; i++) {
		  let ball = document.createElement("div");
		  ball.classList.add("ball");
		  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
		  ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
		  ball.style.top = `${Math.floor(Math.random() * 90)}vh`;
		  ball.style.transform = `scale(${Math.random()})`;
		  ball.style.width = `${Math.random()}em`;
		  ball.style.height = ball.style.width;
		  
		  balls.push(ball);
		  document.body.append(ball);
		}

		// frames
		balls.forEach((el, i, ra) => {
		  let to = {
		    x: Math.random() * (i % 2 === 0 ? -11 : 11),
		    y: Math.random() * 12
		  };

		  let anim = el.animate(
		    [
		      { transform: "translate(0, 0)" },
		      { transform: `translate(${to.x}rem, ${to.y}rem)` }
		    ],
		    {
		      duration: (Math.random() + 1) * 2000, // duração
		      direction: "alternate",
		      fill: "both",
		      iterations: Infinity,
		      easing: "ease-in-out"
		    }
		  );
		});
 
	

		