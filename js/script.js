const hour = document.querySelector(".h"),
    min = document.querySelector(".m"),
    sec = document.querySelector(".s"),
    hoursNum = document.querySelector(".hours"),
    minutesNum = document.querySelector(".minutes");

function clock() {
    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;
    sec.style = `transform:rotate(${second}deg)`;
    min.style = `transform:rotate(${minutes}deg)`;
    hour.style = `transform:rotate(${hours}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    hoursNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    minutesNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
}
clock()

const tabItem = document.querySelectorAll(".tabsItem"),
    tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener("click", () => {
        for (let k = 0; k < tabItem.length; k++) {
            tabItem[k].classList.remove("active")
            tabs[k].classList.remove("active")

        }
        tabItem[i].classList.add("active")
        tabs[i].classList.add("active")
    })

}


const stopHour = document.querySelector(".stopwatch__hours"),
      stopMinut = document.querySelector(".stopwatch__minutes"),
      stopSecond = document.querySelector(".stopwatch__seconds"),
      stopBtn = document.querySelector(".stopwatch__btn");
      
      
      stopBtn.addEventListener("click",()=>{
        if (stopBtn.innerHTML==`start`) {
            stopBtn.innerHTML = `stop`
        }else if (stopBtn.innerHTML==`stop`) {
            stopBtn.innerHTML=`clear`
        }else if (stopBtn.innerHTML==`clear`) {
           stopBtn.innerHTML=`start` 
        }
      })

      const color = document.querySelector(".tabsLink__span");
      
      function clocks() {
        if (stopBtn.innerHTML==`stop`) {
            color.classList.add("active")
            stopSecond.innerHTML++
            if (stopSecond.innerHTML > 59) {
                stopSecond.innerHTML = 0
                stopMinut.innerHTML++
            } else if (stopMinut.innerHTML > 59) {
                stopMinut.innerHTML = 0
                stopHour.innerHTML++
            }
        }else if (stopBtn.innerHTML==`clear`) {
            color.classList.remove("active")
            color.classList.add("active_clear")
        }else if (stopBtn.innerHTML==`start`) {
            stopSecond.innerHTML = 0
            stopMinut.innerHTML = 0
            stopHour.innerHTML = 0
            color.classList.remove("active_clear")
        }
        setTimeout(() => {
            clocks()
        }, 600);
      }
      clocks()
      
      
      
      