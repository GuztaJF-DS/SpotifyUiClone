export default function SecondsToHours(seg) {
    let Hours=Math.floor(seg/(60*60));
    let Minutes=Math.floor(seg/60);
    if(Minutes>=60){
        Minutes=Minutes-60;
    }

    var leftover=seg%(60*60);
    leftover%=60;
    
    let Seconds=Math.ceil(leftover)
    
    let final=(Hours===0)
    ?Minutes+":"+Seconds
    :Hours+":"+Minutes+":"+Seconds


    return final
}