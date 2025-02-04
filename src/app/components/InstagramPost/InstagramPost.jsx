import { post1, post2, post3, post4, post5, post6, post7, post8, post9 } from "../../../assets/images";

export const InstagramPosts = () => {
        const instagramImages = [
            post1,
            post2,
            post3,
            post4,
            post5,
            post6,
            post7,
            post8,
            post9
        ];

        return (
            <div className="row">
                <div class="col-lg-12 col-md-12 right-box">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Instagram</strong> Post</h2>
                        </div>
                        <div className="body widget">
                            <ul className="list-unstyled instagram-plugin m-b-0">
                                {instagramImages.map((image, index) => (
                                    <li style={{ width: '30%' }} key={index}>
                                        <a href="https://www.instagram.com/startup_piaui/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <img src={image} alt={`Instagram post ${index + 1}`} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
