import styles from "./styles.module.css";
import React from "react";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const [haberler, setHaberler] = React.useState([]);

	const getNews = async () => {
		const response = await fetch(
			"https://newsdata.io/api/1/news?apikey=pub_6738ff35e9c5d47f4afbf05f20a31f6757c1&country=tr&language=tr&domain=cumhuriyet"
		).then((res) => res.json());
		setHaberler(response.results.filter((haber, index) => index < 8));
	}

	React.useEffect(() => {
		getNews();
	}, []);


	return (
		<div className="row">
			<div className="col-md-3 d-flex flex-column">
				<div className="h-15 card text-center">
					<div className="card-body">
						<h4 className="card-title">Haber Kategorileri</h4>
					</div>
					<div className="card-body">
						<ul className="d-flex flex-column">
							<li className="btn btn-info btn-block m-2">Spor Haberleri</li>
							<li className="btn btn-info btn-block m-2">Siyaset Haberleri</li>
							<li className="btn btn-info btn-block m-2">Saglik Haberleri</li>
							<li className="btn btn-info btn-block m-2">Zort Haberleri</li>
						</ul>
					</div>
				</div>
				<div className="card text-center mt-4">
						<div className="card-body">
							<h4 className="card-title">Haber Kategorileri</h4>
						</div>
						<div className="card-body">
						<ul className="d-flex flex-column">
								<li className="btn btn-info btn-block m-2">Spor Haberleri</li>
								<li className="btn btn-info btn-block m-2">Siyaset Haberleri</li>
								<li className="btn btn-info btn-block m-2">Saglik Haberleri</li>
								<li className="btn btn-info btn-block m-2">Zort Haberleri</li>
							</ul>
						</div>
					</div>
					<div className="card text-center mt-4">
						<div className="card-body">
							<h4 className="card-title">Haber Kategorileri</h4>
						</div>
						<div className="card-body">
						<ul className="d-flex flex-column">
								<li className="btn btn-info btn-block m-2">Spor Haberleri</li>
								<li className="btn btn-info btn-block m-2">Siyaset Haberleri</li>
								<li className="btn btn-info btn-block m-2">Saglik Haberleri</li>
								<li className="btn btn-info btn-block m-2">Zort Haberleri</li>
							</ul>
						</div>
					</div>
			</div>
			<div className="container col">
				<nav className={styles.navbar}>
					<h1 className="mt-2">Aluvittin Haberler</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Çıkış Yap
					</button>
				</nav>
				<div className="row mt-4">
					{haberler.map((haber) => (
						<div className="col-md-4 d-flex align-items-stretch mb-4" key={haber.title}>
							<div className="card">
								<img className="card-img-top"
									src={haber.image_url}
									alt={haber.title}
									style={{ width: "100%" }} />
								<div className="card-body d-flex flex-column">
									<h4 className="text-center">{haber.title}</h4>
									<span className="border border-bottom m-2"></span>
									<p>{haber.description}</p>
									<p className='pubDate mt-auto'>{haber.pubDate} <br></br> Kaynak: {haber.source_id.toUpperCase()}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>


	);
};

export default Main;






