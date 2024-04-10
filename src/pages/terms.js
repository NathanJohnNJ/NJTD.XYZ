import './style.css';
import { useEffect } from 'react';

const Terms = (props) => {
    window.scrollTo(0,0)
    useEffect(() => {
        props.setHome(false)
        props.setFooterHeight("100px") // eslint-disable-next-line
    },[])
    return (
        <div className="terms">
            <h1 className="termTitle">Website Usage Terms & Conditions</h1>
            <p>Welcome to my website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with my privacy policy govern NJTD’s relationship with you in relation to this website.</p>
            <p> If you disagree with any part of these terms and conditions, please do not use my website.</p>
            <p>The term ‘NJTD’ or 'me' refers to the owner of the website whose registered office is in Warrington, WA5, UK.</p>
            <p className="termsHeading">The use of this website is subject to the following terms of use:</p>
                <ul>
                    <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                    <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by me for use by third parties:
                        <ul>
                            <li>Visits to site</li>
                            <li>Pages visited</li>
                            <li>Date/Time of visits</li>
                        </ul>
                    </li>
                    <li>Neither me, nor any third parties, provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and I expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                    <li>Your use of any information or materials on this website is entirely at your own risk, for which I shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                    <li>This website contains material which is owned by or licensed to me. This material includes, but is not limited to, the design, layout, look, appearance and graphics of the website. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                    <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
                    <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                    <li>This website also includes links to other websites. These links are provided for your convenience to provide further information. They do not signify that I endorse the website(s). I have no responsibility for the content of the linked website(s).</li>
                    <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</li>
                </ul>
        </div>
    )
};

export default Terms;




