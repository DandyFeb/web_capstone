import React from "react";
import { Link } from "react-router-dom";
import homepage from "./homepage.png";
import image236 from "./image-236.png";
import image237 from "./image-237.png";
import image238 from "./image-238.png";
import line20 from "./line-20.svg";
import sosmed from "./sosmed.png";
import "./style.css";

export const Homepage = () => {
	return (
		<div className="homepage">
			<div className="diskon">
				<div className="rectangle" />

				<p className="text-wrapper">
					Diskon 70% hingga 31 Desember 2025, Hanya Untuk Kamu! Belanja Sekarang
					Juga!
				</p>
			</div>

			<div className="nama-toko">
				<div className="div" />

				<Link className="text-wrapper-2" to="/homepage">
					Syaoutfit
				</Link>
			</div>

			<div className="navbar">
				<div className="rectangle-2" />

				<div className="navbar-2">
					<div className="text-wrapper-3">Home</div>

					<div className="text-wrapper-4">Katalog</div>

					<div className="text-wrapper-5">About</div>

					<div className="text-wrapper-6">Location</div>
				</div>
			</div>

			<img className="img" alt="Homepage" src={homepage} />

			<div className="brand-image">
				<div className="text-wrapper-7">Our Integrity</div>

				<p className="p">
					Sebuah perwujudan gaya berkelas dunia, menghadirkan harmoni antara
					desain, keanggunan abadi, dan kualitas impor yang tak tertandingi.
				</p>
			</div>

			<div className="brand-image-group">
				<div className="brand-image-i">
					<img className="image" alt="Image" src={image236} />

					<div className="text-wrapper-8">Modernity</div>
				</div>

				<div className="brand-image-II">
					<img className="image-2" alt="Image" src={image237} />

					<div className="text-wrapper-9">New Brands</div>
				</div>

				<div className="brand-image-III">
					<img className="image-3" alt="Image" src={image238} />

					<div className="you-me">You &amp; Me</div>
				</div>
			</div>

			<footer className="footer">
				<img className="line" alt="Line" src={line20} />

				<div className="copyright">
					<p className="text-wrapper-10">
						© 2025 Syaoutfit. All rights reserved
					</p>
				</div>

				<div className="brand-logo">
					<div className="text-wrapper-11">Syaoutfit</div>

					<div className="text-wrapper-12">Delivering Style to You</div>

					<img className="sosmed" alt="Sosmed" src={sosmed} />
				</div>

				<div className="informasi-footer">
					<div className="text-wrapper-13">Help Center</div>

					<div className="text-wrapper-14">Shipping Info</div>

					<div className="text-wrapper-15">Term of Use</div>

					<div className="text-wrapper-16">Return Policy</div>
				</div>
			</footer>
		</div>
	);
};
