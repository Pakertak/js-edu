/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) 
  {
    let amout_of_hours
  if(knowsProgramming===true)
    {amout_of_hours=800;}
  else
    {amout_of_hours=1300;}
  let hours_a_week=config[focus];    
  let result=Math.ceil(amout_of_hours/hours_a_week);
      return result;
  };
  