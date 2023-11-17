

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const getDateWithoutNames = () => {

    const date = new Date;
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const fulldate = {
        date: currentDay,
        month: currentMonth,
        year: currentYear
    }

    return fulldate
}


export const getDatewithNames = () =>{
    const date = new Date;
    
    const currentDay = days[date.getDay()] ;
    const currentMonth = months[date.getMonth()];
    const currentYear = date.getFullYear();
    const currentDate = date.getDate();


    const fulldate = {
        date: currentDate,
        day: currentDay,
        month: currentMonth,
        year: currentYear
    }

    return fulldate
    
}