function partyTime(input) {
    let guests = {
        in: []
    }

    let isStarted = false;
    input.forEach(elem => {
        if (elem === "PARTY") isStarted = true;

        if (elem !== 'PARTY')
            isStarted ? guests.in.splice(guests.in.indexOf(elem), 1) : guests.in.push(elem)
    })

    let vip = guests.in.filter(a => a[0] == Number(a[0]));
    let regular = guests.in.filter(a => a[0] != Number(a[0]));
 
    console.log(guests.in.length);
    vip.concat(regular).forEach(elem => console.log(elem));
}

partyTime(
    [ '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc' ]
)