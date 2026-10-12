const TRYSTERO="https://cdn.jsdelivr.net/npm/trystero@0.21/+esm";

export async function joinRoom({APP_ID,roomId,log=console.log}){
    let T;
    try{T=await import(TRYSTERO);}
    catch(e){throw new Error("ライブラリ読み込み失敗: "+e.message);
    }
    log("ライブラリ読み込み成功");
    try{const room=T.joinRoom({appId: APP_ID}, "room-"+roomId);}
    catch(e){throw new Error("ルーム参加に失敗: "+e.message);}
    log("ルームに参加 roomId:"+roomId);
    return room;
}