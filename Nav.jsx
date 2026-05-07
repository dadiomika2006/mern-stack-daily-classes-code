const Nav=function(){
    return(
        <nav style={{backgroundColor:"goldenrod",height:"90px"}}>
            <ol style={ListStylings.orderList}>
                <li style={ListStylings.list}>Home</li>
                <li style={ListStylings.list}>Login</li>
                <li style={ListStylings.list}>Register</li>
                <li style={ListStylings.list}>About</li>
            </ol>
        </nav>
    );
};

const ListStylings={
    list:{
        backgroundColor:"powderblue",
        padding:"10px 20px",
        fontSize:"22px",
        fontStyle:"italic",
        fontWeight:"bold"
    },
    orderList:{
         display: "flex",
         justifyContent: "space-evenly",
         alignItems: "center",
         height:'80px',
         listStyle:"none"
  },
};

export default Nav;