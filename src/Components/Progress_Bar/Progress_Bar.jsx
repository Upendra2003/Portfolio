import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => { 
	
	const Parentdiv = { 
		height: height, 
		width: '100%', 
		backgroundColor: 'whitesmoke', 
		borderRadius: 40, 
	} 
	
	const Childdiv = { 
		height: '100%', 
		width: `${progress}%`, 
		backgroundImage: 'linear-gradient(to right,#8FFCFF, #00B2FF)', 
	    borderRadius:40, 
		// textAlign: 'right'
	} 
	
	const progresstext = { 
		color: 'black', 
		fontWeight: 100,
        fontSize:  '10px'
	} 
		
	return ( 
	<div style={Parentdiv}> 
	<div style={Childdiv}> 
		<span style={progresstext}></span> 
	</div> 
	</div> 
	) 
} 

export default Progress_bar; 
