const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');        

const getTiime = () => {
    const now = new Date()
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
}   

getTiime()