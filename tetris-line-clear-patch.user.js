// ==UserScript==
// @name         arcade.gov fakeass tetris line clearer
// @version      1.0
// @match        https://www.whitehouse.gov/arcade/build-the-wall/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(async()=>{
    let h=await(await fetch(location.href)).text();

    h=h.replace(
        "T+=10,F(2.5,90)",
        "T+=10,(()=>{for(let r=a-1;r>=0;r--)if(L[r].every(Boolean)){L.splice(r,1);L.unshift(Array(m).fill(null));r++}})(),F(2.5,90)"
    );

    document.open();
    document.write(h);
    document.close();
})();