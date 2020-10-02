import React, { Component } from 'react';
import Style from './Section.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
export default class Section extends Component {
    constructor(props){
        super(props)
            this.state={
                ApiData:[],
                search:'',
            }
        
    }
    componentDidMount=()=>{
        axios.get("http://starlord.hackerearth.com/TopRamen")
            .then(responce =>
                this.setState({ApiData:responce.data}))
            .catch(err =>
                alert("Error"))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    render() {
        
        return (
            <div>
                <div className={Style.partisiton}>
                    <div className={Style.section_two}>
                        <div className={Style.section_two_body}>
                            <AppBar position="static">
                                <Toolbar variant="dense" className={Style.nav_icon_home}>
                                    <img src="don-ramon-restaurant-logo.png" className={Style.logo}></img>
                                    <div className={Style.arrng}>
                                        <input placeholder="Search Resturent" type="text" name="search" className={Style.search_input} onChange={this.handleChange}></input>
                                    </div>
                                    
                                </Toolbar>
                            </AppBar>
                            <div>
                                <div>
                                    <h2>Top Hotel</h2>
                                    <div className={Style.card_div}>
                                        {
                                            this.state.ApiData.slice(0,30).map((e)=>{
                                                var rank= e["Top Ten"]
                                                var s=rank.split(" ");
                                                if(s[1]=="#1")
                                                return(
                                                    <Card className={Style.card_size}>
                                                        <CardActionArea>
                                                            <CardMedia
                                                                className={Style.img_media}
                                                                image="don-ramon-restaurant-logo.png"
                                                                title="Contemplative Reptile"
                                                                />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">{`${e.Brand}`}</Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">{e.Variety}</Typography>
                                                                <Typography variant="body1" color="textSecondary" component="p">{`Style: ${e.Style}`}</Typography>
                                                                <Typography variant="body1" color="textSecondary" component="p">{`Rank: ${s[1]}`}</Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                        <CardActions>
                                                            <Typography variant="body2" color="primary">{`Country: ${e.Country} ;`}</Typography>
                                                            <Typography variant="body2" color="primary">{`Star: ${e.Stars}`}</Typography>
                                                        </CardActions>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h2>Select your Resturent</h2>
                                    <div className={Style.select_resturent}>
                                        {
                                            this.state.ApiData.map((e)=>{
                                                var rank= e["Top Ten"]
                                                var s=rank.split(" ");
                                                if(this.state.search==''){
                                                return(
                                                    <Card className={Style.card_size}>
                                                        <CardActionArea>
                                                            <CardMedia
                                                                className={Style.img_media}
                                                                image="don-ramon-restaurant-logo.png"
                                                                title="Contemplative Reptile"
                                                                />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">{`${e.Brand}`}</Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">{e.Variety}</Typography>
                                                                <Typography variant="body1" color="textSecondary" component="p">{`Style: ${e.Style}`}</Typography>
                                                                <Typography variant="body1" color="textSecondary" component="p">{`Rank: ${s[1]}`}</Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                        <CardActions>
                                                            <Typography variant="body2" color="primary">{`Country: ${e.Country} ;`}</Typography>
                                                            <Typography variant="body2" color="primary">{`Star: ${e.Stars}`}</Typography>
                                                        </CardActions>
                                                    </Card>
                                                )
                                                }
                                                else{
                                                    console.log(this.state.above_star)
                                                    if(e.Brand==this.state.search){
                                                        
                                                        return(
                                                            <Card className={Style.card_size}>
                                                                <CardActionArea>
                                                                    <CardMedia
                                                                        className={Style.img_media}
                                                                        image="don-ramon-restaurant-logo.png"
                                                                        title="Contemplative Reptile"
                                                                        />
                                                                    <CardContent>
                                                                        <Typography gutterBottom variant="h5" component="h2">{`${e.Brand}`}</Typography>
                                                                        <Typography variant="body2" color="textSecondary" component="p">{e.Variety}</Typography>
                                                                        <Typography variant="body1" color="textSecondary" component="p">{`Style: ${e.Style}`}</Typography>
                                                                        
                                                                        <Typography variant="body1" color="textSecondary" component="p">{`Rank: ${s[1]}`}</Typography>
                                                                        
                                                                    
                                                                    </CardContent>
                                                                </CardActionArea>
                                                                <CardActions>
                                                                    <Typography variant="body2" color="primary">{`Country: ${e.Country} ;`}</Typography>
                                                                    <Typography variant="body2" color="primary">{`Star: ${e.Stars}`}</Typography>
                                                                </CardActions>
                                                            </Card>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
