 window.currentUser = { id: '19', name: 'Jane', email: 'jane@chameleon.io' };
 // users are like authors and profiles like commentors
 // open a modal with commentor info when clicked



// you missed the equal sign after 'ActiveProfiles'
export const  ActiveProfiles({ profiles, onLaunchProfile }) => {

 // You could initlialize 'active' as a const and asigng the falue from the begining since its value doesnt change 
  var active = [];

  // Array.filter would be a good option to filter and assign 'active' value on line 11 instead of creating a for loop.
  //Also date could be created as a constant outside the loop for a more readebly code
  for(i=0; i < profiles.length; i++) {
    if(!profiles[i].disabled && profiles[i]['last_seen_time'] > new Date(new Date().getTime()-(24*60*1000)).toISOString()) { // within the last 24 hours
      active.push(profiles[i]);
    }
  }
  
  //I woild recommend to use Triple equals operator (===) to assure a more strict validation
  if(active.length == 1 && active[0].email  === window.currentUser.email) {
    active.length = 0;
  }

  return (
    <div>
    // map() children should have key attributes and you could use a arrow function here.
       {active.map(function(a) { return <div onClick={() => onLaunchProfile(a.name, a.email)}>{a.name} - {a.email}</div> })}
    </div>
  )
}

//I would recommend to install eslint to identify problems on code