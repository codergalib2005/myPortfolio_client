import ReviewsSection from "../components/Reviews/ReviewsSection";
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Reviews() {
    return (
        <div>
            <div className="container mx-auto px-6 py-10 text-white">
                <ReviewsSection />
                {/* <div className="py-6 flex items-center justify-center sm:justify-end">
                    <Link to="add_review" className="flex items-center gap-2 text-lg border-b-2 border-white hover:border-red-500 text-white hover:text-red-500 transition-all duration-300 ease-linear">
                        Share Your Experience with Galib <span><BsBoxArrowInRight /></span>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}