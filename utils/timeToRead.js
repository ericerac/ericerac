export  const timeToRead =  (post)=>{

  let p1 = post.p_1 ? post.p_1 : "" 
  let p2 = post.p_2 ? post.p_2 : "" 
  let p3 = post.p_3 ? post.p_3 : "" 
  let p4 = post.p_4 ? post.p_4 : "" 
  let p5 = post.p_5 ? post.p_5 : "" 
  
  const totalParagraf = p1.concat(', ',p2,', ',p3,', ',p4,', ',p5 )
   const words = totalParagraf.trim().split(/\s+/).length;
 
  let realTime = words /200
   
  const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)
  const time = round(realTime, 1)
  
  return time
  }