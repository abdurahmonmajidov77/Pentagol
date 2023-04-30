import { useNavigate } from 'react-router';
import { GetNews } from "../../redux/news"; 
import { useSelector, useDispatch } from "react-redux";
import './style.css';
import { useEffect } from 'react';

function TopNews() {
    const navigate = useNavigate()
    const HandleMore = (e) => {
        console.log(e.target.id)
        navigate('/more')
    }
    const dispatch = useDispatch()
    const dataNews = useSelector(state => state.news)
    useEffect(() => {
        dispatch(GetNews())
    },[])
    console.log(dataNews)
  return (
    <div className="TopNews">
        <div className="TopNewsBox">
            <ul>
                <li onClick={HandleMore} id={1}>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                {dataNews.getNews.Success == true ? dataNews.getNews?.Data.data.data.map((elem, index) => 
                    <li key={index}>
                        <button value={elem.id}></button>
                        <img src={elem.img} alt="img" />
                        <h4>{elem.title}</h4>
                    </li>)
                :dataNews.getNews.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataNews.getNews.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            </ul>
        </div>
        <div className="TopNewsTable">
            <h3>Jadval</h3>
            <select>
                <option value="italy">Italiya. Seriya A</option>
                <option value="liga">Premier Liga</option>
                <option value="laliga">LaLiga</option>
                <option value="bund">Bundesliga</option>
                <option value="ligua">Ligue 1</option>
            </select>
            <ul>
                <li>
                    <div className="TopNewsSelectUp">
                        <h5>№</h5>
                        <h5>Jamoa</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>O</h5>
                        <h5>G</h5>
                    </div>
                </li>
                <li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li>
                <li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li><li>
                    <div className="TopNewsSelectUp">
                        <h5>1</h5>
                        <img src="https://picsum.photos/300" alt="" />
                        <h5>Barcelona</h5>
                    </div>
                    <div className="TopNewsSelectDown">
                        <h5>15</h5>
                        <h5>14</h5>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default TopNews;
