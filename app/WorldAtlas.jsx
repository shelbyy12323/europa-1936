'use client';
import {useRef,useState} from 'react';

export default function WorldAtlas(){
  const [open,setOpen]=useState(false),[countries,setCountries]=useState([]),[name,select]=useState(''),[error,setError]=useState(false);
  const [view,setView]=useState([0,0,360]),drag=useRef(null);
  async function show(){
    setOpen(true);
    select('');setView([0,0,360]);
    const atlas=window.campaignAtlas;
    setCountries(atlas?.data||[]);setError(!atlas);
  }
  function zoom(factor){
    setView(([a,b,w])=>{const size=Math.min(360,Math.max(12,w*factor));return [a+(w-size)/2,b+(w-size)/4,size]});
  }
  return <><button id="atlas-open" onClick={show}>Карта мира</button>{open&&<section className="atlas"><header><strong>{name||'Мировой атлас'}</strong><small>Границы на начало кампании · {open && window.campaignAtlas?.year}</small>{name&&<button onClick={()=>{window.dispatchEvent(new CustomEvent("world-country-choice",{detail:name}));setOpen(false)}}>Играть за страну</button>}<button onClick={()=>zoom(.7)}>+</button><button onClick={()=>zoom(1.4)}>−</button><button onClick={()=>setOpen(false)}>К кампании</button></header>{error&&<button onClick={show}>Загрузить карту снова</button>}
    <svg viewBox={[view[0],view[1],view[2],view[2]/2].join(' ')} onWheel={e=>zoom(e.deltaY<0?.8:1.25)} onPointerDown={e=>{drag.current=[e.clientX,e.clientY,...view];if(e.target.dataset.country)select(e.target.dataset.country);e.currentTarget.setPointerCapture(e.pointerId)}} onPointerUp={()=>drag.current=null} onPointerCancel={()=>drag.current=null} onPointerMove={e=>{if(!drag.current)return;const [x,y,a,b,w]=drag.current;const scale=e.currentTarget.getScreenCTM().a;setView([a-(e.clientX-x)/scale,b-(e.clientY-y)/scale,w])}}>
    {countries.map(([country,path],i)=><path key={i} data-country={country} d={path} fill={name===country?'#c5af78':['#718979','#879382','#819086','#93947a'][i%4]}><title>{country}</title></path>)}</svg></section>}</>;
}
