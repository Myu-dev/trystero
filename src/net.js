const TRYSTERO="https://cdn.jsdelivr.net/npm/trystero@0.21/+esm";

export async function joinRoom({APP_ID,roomId,log=console.log}){
    const T=await import(TRYSTERO);
    log("ライブラリ読み込み成功");
    const room=T.joinRoom({appId: APP_ID}, "room-"+roomId);
    log("部屋に参加 roomId:"+roomId);
    return room;
}