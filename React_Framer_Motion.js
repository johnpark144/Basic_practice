// npm i framer-motion

// ##### Animate (에니메이션 효과) ###############################################################################################################
import { motion } from 'framer-motion';

return(
   <motion.div className='home container'
      animate={{ rotateZ:180, opacity:0.2, marginTop: 200 }} // motion.태그 는 animate 안에 CSS요소를 애니메이션 효과로 빠꿔줌
    >
      <motion.h2 animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}> {/* 픽셀단위가 디폴트 */}
        welcome to Pizza Joint
      </motion.h2>

      <motion.button onClick={()=>setToWhere("base")}
      animate={{ scale: 1.5 }} >
        create your pizza
      </motion.button>
    </motion.div>
    )}
)

// ##### Initial (시작점) ##################################################################################################################
<motion.div className='title' initial={{ y: -250 }} animate={{ y: -10 }}>
  <h1>Pizza joint</h1>
</motion.div>

<motion.div className='home container'
  initial={{ opacity: 0 }} // 시작점
  animate={{ opacity: 1 }} // motion.태그 는 animate 안에 CSS요소를 애니메이션 효과로 빠꿔줌
>
  <h2>
    welcome to Pizza Joint
  </h2>
  <motion.button onClick={()=>setToWhere("base")}
  animate={{  }} >
    create your pizza
  </motion.button>
</motion.div>

// ##### Transition Options (옵션) ##################################################################################################################
<motion.div className='home container'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1.5 }} // 초단위가 디폴트
>
</motion.div>

<motion.div className='title' initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }} >  {/* 에니메이션 타입 */}
  <h1>Pizza joint</h1>
</motion.div>

// ##### Transition Options (옵션) ##################################################################################################################
