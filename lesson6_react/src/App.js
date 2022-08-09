import logo from './logo.svg';
import './App.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';

const tovars = [{'id': 1, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/30059533b.jpg','name': 'Ноутбук HUAWEI MateBook 14 KLVL-W56W 16+512GB Space Grey', 'rate': 4.2, 'price': 69999, 'comment': 17, 'bonus':2100},
{'id': 2, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/30060665b.jpg', 'name': 'Монитор Rombica SkyView M23-MF (MUT-002)', 'rate': 4.4, 'price': 7899, 'comment': 19, 'bonus':237},
{'id': 3, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/30063297b.jpg', 'name': 'Смартфон HUAWEI nova Y70 Midnight Black (MGA-LX9N)', 'rate': 4.7, 'price': 15999, 'comment': 13, 'bonus': 480},
{'id': 4, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/10029726b.jpg', 'name': 'Телевизор Toshiba 43C350KE', 'rate': 4.9, 'price': 29999, 'comment': 38, 'bonus': 900},
{'id': 5, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/20064638b.jpg', 'name': 'Стиральная машина узкая Haier HW70-BP12969AS', 'rate': 4.5, 'price': 37999, 'comment': 139, 'bonus': 3800},
{'id': 6, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/20070160b.jpg', 'name': 'Холодильник Candy CCRN 6180W', 'rate': 4.7, 'price': 29999, 'comment': 52, 'bonus': 900},
{'id': 7, 'img': 'https://img.mvideo.ru/Pdb/small_pic/200/20078604b.jpg', 'name': 'Сплит-система Electrolux EACS-09HAR_A/N3_21Y', 'rate': 3.3, 'price': 29999, 'comment': 3, 'bonus': 900},]


const Card = ({tovar={}, bonus}) =>{
    const [like, setLike] = useState(false)
    return(
        <div key={tovar.name.toString()} className="card">
            <img className='img' src = {tovar.img}/>
            <p>{tovar.name}</p>
            <div className='rate_com'>   
                <text id='star'><StarOutlinedIcon/>{tovar.rate}</text>
                <text>{tovar.comment} отзыва</text>
            </div>
            <p>{tovar.price} &#8381;</p>
            <p>+{bonus} бонусных рублей</p>
            <div className='button'>
            <Button variant="contained" title="Добавить в корзину">
                <ShoppingCartOutlinedIcon />
            </Button>
            <IconButton onClick={()=> setLike(!like)} title="Добавить в избранное">
                {like? 
                    <FavoriteIcon/>
                    :
                    <FavoriteBorderOutlinedIcon />
                }
            </IconButton>
            <IconButton title="Добавить в сравнение">
                <QueryStatsOutlinedIcon />
            </IconButton>
            </div>
        </div>
    );
}

class CardTwo extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {like: false};
      
    }

    handleChange(e) {
        this.setState({like: !this.state.like})
    }
    
    render() {
        const like = this.state.like;
        const tovar = {} && this.props.tovar;
        const bonus = this.props.bonus;
        return(
            <div key={tovar.name.toString()} className="card">
                <img className='img' src = {tovar.img}/>
                <p>{tovar.name}</p>
                <div className='rate_com'>   
                    <text id='star'><StarOutlinedIcon/>{tovar.rate}</text>
                    <text>{tovar.comment} отзыва</text>
                </div>
                <p>{tovar.price} &#8381;</p>
                <p>+{bonus} бонусных рублей</p>
                <div className='button'>
                <Button variant="contained" title="Добавить в корзину">
                    <ShoppingCartOutlinedIcon />
                </Button>
                <IconButton onClick={this.handleChange} title="Добавить в избранное">
                    {like? 
                        <FavoriteIcon/>
                        :
                        <FavoriteBorderOutlinedIcon />
                    }
                </IconButton>
                <IconButton title="Добавить в сравнение">
                    <QueryStatsOutlinedIcon />
                </IconButton>
                </div>
            </div>
        );
    }
  }

const CardList = () =>{
    return(
        <>
            <div className="card_list">
                {tovars.map(data=>
                    <Card tovar={data} bonus={data.bonus}/> 
                )}
            </div>
            <div className="card_list">
                {tovars.map(data=>
                    <CardTwo tovar={data} bonus={data.bonus}/>
                )}
            </div>
        </>
    );
}

// в key лучше указывать постоянное значение, которое будет одноначно идентифицировать его среди других, а индексы лучше нге использовать
// так как порядок элементов может поменяться

function App() {
  return (
    <>
      <CardList/>
    </>
  );
}

export default App;
