import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
            <li className={classes.navbar__item}>
                <NavLink to="/home" className={classes.navbar__link}><div className={classes.home_icon}><svg fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><path transform="translate(-2.4, -2.4), scale(0.8999999999999999)" d="M16,27.740946490317583C18.212604513440795,27.415137570388666,20.236791378865995,26.69178538697554,22.263575177073687,25.746313218941687C24.59484109499507,24.65880351828703,27.345300908403377,23.983697562497404,28.718026565865504,21.80812812016168C30.139010160870594,19.556076903264593,31.027209589400616,16.317302829210746,29.651723474245287,14.037178488781885C28.1968989805239,11.625536013705627,23.86195614350724,12.913848195547954,22.0511934929496,10.756610990586687C20.187740364187725,8.53660141736701,22.55592475366303,3.7958467990541083,19.964884713720593,2.4968427268147178C17.592177487199905,1.3072986433698783,15.679302988861515,5.489214369650727,13.150087403533902,6.294089038265671C10.711929491525984,7.069986337350234,7.761742182465489,5.576937306007737,5.667394665592946,7.04674651171552C3.4957465173632554,8.57080515724188,2.6705443740421537,11.406820064168695,2.156219854575907,14.00956490824944C1.6230632195748247,16.707609878527343,1.5581647720690914,19.571926280918618,2.6976917288757587,22.074960634218332C3.8378462957580997,24.579373567963646,5.895388354542412,26.70543156743845,8.427036153475672,27.78376175863679C10.797507935902566,28.793440629233135,13.45094162016423,28.1162986838637,16,27.740946490317583" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.707 11.293l-8-8a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 1.414 1.414L5 12.414V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.586l.293.293a1 1 0 0 0 1.414-1.414zM13 19h-2v-4h2v4zm4 0h-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H7v-8.586l5-5 5 5V19z"></path> </g></svg></div>Home</NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink to="/profile" className={classes.navbar__link}><div className={classes.home_icon}><svg fill="#000000" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><path transform="translate(0, 0), scale(0.75)" d="M16,28.07959509268403C17.573654376881453,27.28444451184824,18.353346007674368,25.505723159347706,19.757431165432337,24.4393285729748C20.82927686493833,23.625267940637215,22.068072474517127,23.14352860297544,23.277310438023164,22.552519750006944C25.059347251819972,21.681558396613717,27.498888279595015,21.733472210143557,28.62898028679343,20.103404438516286C29.674442229917833,18.595408798254486,29.60496474708283,16.283104435494323,28.749012687313,14.660024771107562C27.843507187668763,12.942980521154876,24.57132716261276,13.230217646985158,24.022393558980735,11.368268919177355C23.227213751248463,8.67106834411827,27.131914496787584,5.306135919376704,25.350009318565835,3.1308162176889915C23.84248445393791,1.2904553618538588,20.67010754705941,3.7332857294389905,18.43448565840859,4.54664547035749C16.83158091099672,5.129811253753332,15.837524697869853,7.183339777611816,14.132075025764655,7.212103923965614C11.842565548996836,7.250718834006827,10.021986534679883,4.138151702388846,7.8088560360823855,4.72585754008721C5.962594911510871,5.216139717985824,5.4840268489317845,7.796810471327685,4.985783303232401,9.640939025208349C4.527694068355882,11.33644606298708,5.613493133595546,13.180435910586748,5.073116672435482,14.851538284019053C4.3527169104858725,17.07935877314555,0.7215540473054752,18.502992190062457,1.3949658901678337,20.7454632464379C2.0592506722672708,22.957541060093355,6.030202301290995,21.873857454753328,7.670276291324868,23.500116915174683C9.180140069052603,24.99726293870655,8.197948300058409,28.314339040777515,10.06121930786799,29.338719826680798C11.854084648291359,30.32439330023561,14.173924887950681,29.00229114801053,16,28.07959509268403" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.474 19.013a8.941 8.941 0 0 0-4.115-4.89 6 6 0 1 0-8.717 0 8.941 8.941 0 0 0-4.115 4.89 11.065 11.065 0 0 0 1.63 1.59 6.965 6.965 0 0 1 4.728-5.275 1 1 0 0 0 .181-1.829 4 4 0 1 1 3.871 0 1 1 0 0 0 .181 1.829 6.965 6.965 0 0 1 4.726 5.272 11.059 11.059 0 0 0 1.63-1.587z"></path> </g></svg></div> Profile</NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink to="/dialogs" className={classes.navbar__link}><div className={classes.home_icon}><svg fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><path transform="translate(-2.4, -2.4), scale(0.8999999999999999)" d="M16,27.58591247225801C18.21857041170283,27.443751358770513,20.279952992983077,26.744780074459488,22.275319444889895,25.764587656372065C24.495588073279155,24.67391557777478,26.96890353318735,23.714355482495154,28.222471166695605,21.5818155523973C29.519541694188252,19.37526951683157,29.41092954034615,16.65644429617642,29.12446157474274,14.11298730518091C28.831100498716584,11.50832860230287,28.319007584705226,8.793061537257044,26.562918313743758,6.847179179091585C24.820257082879056,4.916176125048706,22.140890612867054,4.318268382815003,19.639961473394447,3.603429660012015C17.1558402183524,2.893395122361547,14.569546654054594,1.9584375951690833,12.098536531409861,2.712835652029959C9.636489876041292,3.4644971671689277,8.23637180085073,5.882744919070484,6.369303839908662,7.654954273457317C4.270920663814182,9.646726598598715,0.9653148214149394,10.917174545675474,0.4548554886122105,13.764945642247339C-0.05487130077629765,16.608629996099566,2.2568340067113777,19.14542393439051,3.881437736896004,21.534361946151066C5.285132896238355,23.59845958471561,6.952432871044522,25.488164447288714,9.18564375384327,26.60334529129479C11.281271034735859,27.649822100909443,13.662409132540164,27.735700154832045,16,27.58591247225801" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M20.25 6H19v2h1v8h-3a1 1 0 0 0-1 1v1.586l-2.293-2.293A1 1 0 0 0 13 16h-2.172l-2 2h3.758l3.707 3.707A1 1 0 0 0 18 21v-3h2.25A1.752 1.752 0 0 0 22 16.25v-8.5A1.752 1.752 0 0 0 20.25 6z"></path> <path d="M7 18a1 1 0 0 1-1-1v-3H3.75A1.752 1.752 0 0 1 2 12.25v-8.5A1.752 1.752 0 0 1 3.75 2h12.5A1.752 1.752 0 0 1 18 3.75v8.5a1.762 1.762 0 0 1-.514 1.238A1.736 1.736 0 0 1 16.25 14h-4.836l-3.707 3.707A1 1 0 0 1 7 18zm-3-6h3a1 1 0 0 1 1 1v1.586l2.293-2.293A1 1 0 0 1 11 12h5V4H4v8z"></path> </g></svg></div> dialogs</NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink to="#" className={classes.navbar__link}><div className={classes.home_icon}><svg viewBox="-0.48 -0.48 24.96 24.96" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><path transform="translate(-0.48, -0.48), scale(0.78)" d="M16,28.668068294413388C18.088910076158474,28.509266599673367,20.29137731678958,29.73775733108279,22.202424395153844,28.879466967159193C24.11271043042599,28.021518403267574,24.707163422321976,25.610126790760717,26.16214558900981,24.104040681184028C27.77818219037803,22.431243355132413,30.792088470154585,21.76166057785004,31.27643461906822,19.4867465137501C31.763021044651733,17.20131014671616,29.22433475396913,15.3679937905848,28.494734536122238,13.148158377892862C27.839785666629655,11.1554524295686,28.447573638471255,8.754763528326082,27.1958993119677,7.071568234098944C25.942491660829766,5.386042042923475,23.744758455310862,4.7127179383946896,21.744697594030143,4.071012529158789C19.88843578499408,3.475444030781343,17.91845692579943,3.825756070713078,16,3.4794429698958993C13.660707162673859,3.0571620495795617,11.479717703480173,1.2741057753224552,9.161410074191423,1.799521696674459C6.860877689480045,2.3209090773837584,5.148387463617709,4.332987026064641,3.7742199055777537,6.25026571637005C2.428010248968648,8.128536726479975,1.783899518933072,10.387562020826142,1.3758679778138987,12.662137297315992C0.9786753039712542,14.87629121651389,0.14364196140987895,17.479456273945374,1.4286218382427567,19.325821978292225C2.835884014062738,21.34789303582714,6.611388186356773,20.337548514978696,8.089308630651221,22.308565854717354C9.638586847111675,24.374748943605294,7.3134198096414345,28.24025589684782,9.326177003199762,29.8583362497922C11.109707260286973,31.292138238979337,13.718185441575248,28.841534841918715,16,28.668068294413388" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div> Music</NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink to="#" className={classes.navbar__link}><div className={classes.home_icon}><svg fill="#000000" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><path transform="translate(0, 0), scale(0.75)" d="M16,28.96072580096753C18.216246553408833,29.281377744034458,20.23447273539117,27.802159543288347,22.24684183936762,26.81984745263174C24.389389856126037,25.773990200343714,26.732146619042464,24.929204514983027,28.1641285855236,23.022962913309275C29.66372816216443,21.02670935302902,30.80194794443447,18.45995129018153,30.374786596549185,16C29.9540706236666,13.577166554473864,27.430969525261823,12.218015913999933,25.947348699068378,10.2568955508698C24.666130327522247,8.563320350458092,23.922724409303516,6.494903239947886,22.22197374289758,5.22322535394191C20.41041602371704,3.868695300707488,18.221161725137023,3.246814682835711,16,2.819107276044395C13.40799935610398,2.3199910427436454,10.682444334310158,1.5725764422728412,8.221531278894926,2.527296969960691C5.657603030572417,3.52198263136827,3.4391301030147066,5.593237123617015,2.345346107255594,8.116481899332836C1.2820675419385206,10.569353851628055,2.08670079292086,13.342872105114004,2.381342052825188,15.999999999999998C2.6473935010390153,18.399299829064415,2.3630349494777922,21.15010928064584,3.988510777023526,22.934836536253744C5.60598910769977,24.710782762702227,8.56924325238985,24.074440673074527,10.71632996926966,25.15158494365395C12.690637097582627,26.14204964864587,13.813936690275696,28.64444084302715,16,28.96072580096753" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20zM8 6a3 3 0 0 0-3 3c0 4.639 5.4 7.981 7 8.868 1.6-.89 7-4.247 7-8.868a3 3 0 0 0-5.121-2.121L12.707 8.05a1 1 0 0 1-1.414 0l-1.172-1.171A2.98 2.98 0 0 0 8 6z"></path> </g></svg></div> Saved</NavLink>
            </li>
            <li className={classes.navbar__item}>
                <NavLink to="#" className={classes.navbar__link}><div className={classes.home_icon}><svg viewBox="-5.76 -5.76 203.52 203.52" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"><path transform="translate(-5.76, -5.76), scale(6.36)" d="M16,27.030724509153515C17.620257845858376,26.99893233183151,18.88677006590755,25.61450413657813,20.475022974268704,25.292480956221745C22.649287324564412,24.85164214690377,25.603204023695486,26.495033369234054,27.028226880007526,24.794717463363625C28.434781443220142,23.116437647912473,25.782239543031803,20.478652318767796,26.293877933640008,18.349510464522094C26.814309965587185,16.183774581818586,29.560500521146146,15.027156055916397,29.904233163851014,12.826449513951898C30.25648676057252,10.571188597690451,29.746795125988,7.94638433728873,28.177692849997587,6.2886140141434055C26.59587435707138,4.617408896223133,23.98156989834072,4.4720059514655635,21.70166702949812,4.160366417116116C19.78842036605052,3.898845056956097,17.930570957842306,4.666497152071143,16,4.624047255143523C14.01975036232391,4.5805050104677525,12.124176655654907,3.547742059201822,10.17629089962032,3.906943445648558C8.041710966952103,4.30057231680818,5.477878904994061,4.8685306970707005,4.414101103723427,6.760553943937413C3.306017684258643,8.7313786655952,5.477090099798128,11.285418440619829,4.812697103002094,13.446571117734207C4.07123414928657,15.85841870663252,-0.3420231705041189,17.157334272939572,0.48500860525508926,19.541195541069854C1.3688688057044553,22.08886076996496,5.5593950549721,21.151328288111394,7.930986843721593,22.43482326667404C9.30822851989404,23.180180365657176,10.078845283189352,24.694721255684474,11.43959857201505,25.469771142169783C12.853457119588592,26.275068410823692,14.373199225085854,27.06264506972099,16,27.030724509153515" fill="#8e9fe7" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="m80.16 29.054-5.958-.709 5.958.71Zm31.68 0-5.958.71 5.958-.71Zm34.217 19.756-2.365-5.515 2.365 5.514Zm10.081 3.352 5.196-3-5.196 3Zm7.896 13.676 5.196-3-5.196 3Zm-2.137 10.407-3.594-4.805 3.594 4.805Zm0 39.51 3.593-4.805-3.593 4.805Zm2.137 10.407 5.196 3-5.196-3Zm-7.896 13.676-5.196-3 5.196 3Zm-10.081 3.353 2.364-5.515-2.364 5.515Zm-34.217 19.755 5.958.709-5.958-.709Zm-31.68 0-5.958.709 5.958-.709Zm-34.217-19.755-2.364-5.515 2.364 5.515Zm-10.08-3.353-5.197 3 5.196-3Zm-7.897-13.676 5.196-3-5.196 3Zm2.137-10.407 3.594 4.805-3.594-4.805Zm0-39.51L26.51 81.05l3.593-4.805Zm-2.137-10.407 5.196 3-5.196-3Zm7.896-13.676-5.196-3 5.196 3Zm10.081-3.352-2.364 5.514 2.364-5.514Zm7.85 3.365-2.365 5.515 2.364-5.515Zm0 87.65 2.364 5.514-2.365-5.514ZM36.235 111.17l-3.594-4.805 3.594 4.805Zm76.823 41.535 5.958.71-5.958-.71Zm39.854-69.742-3.593-4.805 3.593 4.805Zm-16.369-30.074 2.364 5.514-2.364-5.514Zm-23.485-13.594-5.958.709 5.958-.71ZM88.104 16a14 14 0 0 0-13.902 12.345l11.916 1.419A2 2 0 0 1 88.104 28V16Zm15.792 0H88.104v12h15.792V16Zm13.902 12.345A14 14 0 0 0 103.896 16v12a2 2 0 0 1 1.986 1.764l11.916-1.419Zm1.219 10.24-1.219-10.24-11.916 1.419 1.219 10.24 11.916-1.419Zm24.675 4.71-9.513 4.08 4.729 11.028 9.513-4.08-4.729-11.028Zm17.642 5.867a14 14 0 0 0-17.642-5.867l4.729 11.029a2 2 0 0 1 2.521.838l10.392-6Zm7.896 13.676-7.896-13.676-10.392 6 7.896 13.676 10.392-6Zm-3.74 18.212a14 14 0 0 0 3.74-18.212l-10.392 6a2 2 0 0 1-.535 2.602l7.187 9.61Zm-8.984 6.718 8.984-6.718-7.187-9.61-8.983 6.718 7.186 9.61Zm8.984 23.182-8.984-6.718-7.186 9.61 8.983 6.718 7.187-9.61Zm3.74 18.212a14 14 0 0 0-3.74-18.212l-7.187 9.61a2 2 0 0 1 .535 2.602l10.392 6Zm-7.896 13.676 7.896-13.676-10.392-6-7.896 13.676 10.392 6Zm-17.642 5.867a14 14 0 0 0 17.642-5.867l-10.392-6a2.001 2.001 0 0 1-2.521.838l-4.729 11.029Zm-9.513-4.08 9.513 4.08 4.729-11.029-9.512-4.079-4.73 11.028Zm-16.381 19.03 1.219-10.24-11.916-1.419-1.219 10.24 11.916 1.419ZM103.896 176a14 14 0 0 0 13.902-12.345l-11.916-1.419a2 2 0 0 1-1.986 1.764v12Zm-15.792 0h15.792v-12H88.104v12Zm-13.902-12.345A14 14 0 0 0 88.104 176v-12a2 2 0 0 1-1.986-1.764l-11.916 1.419Zm-1.012-8.504 1.012 8.504 11.916-1.419-1.012-8.504-11.916 1.419ZM51.428 134.31l-7.85 3.366 4.73 11.029 7.849-3.366-4.73-11.029Zm-7.85 3.366a2 2 0 0 1-2.52-.838l-10.392 6a14 14 0 0 0 17.642 5.867l-4.73-11.029Zm-2.52-.838-7.896-13.676-10.392 6 7.896 13.676 10.392-6Zm-7.896-13.676a2 2 0 0 1 .535-2.602l-7.187-9.61a14 14 0 0 0-3.74 18.212l10.392-6Zm.535-2.602 6.132-4.585-7.187-9.61-6.132 4.585 7.187 9.61ZM26.51 81.05l6.132 4.586 7.187-9.61-6.132-4.586-7.187 9.61Zm-3.74-18.212a14 14 0 0 0 3.74 18.212l7.187-9.61a2 2 0 0 1-.535-2.602l-10.392-6Zm7.896-13.676L22.77 62.838l10.392 6 7.896-13.676-10.392-6Zm17.642-5.867a14 14 0 0 0-17.642 5.867l10.392 6a2 2 0 0 1 2.52-.838l4.73-11.029Zm7.849 3.366-7.85-3.366-4.729 11.029 7.85 3.366 4.729-11.029Zm18.045-18.316-1.012 8.504 11.916 1.419 1.012-8.504-11.916-1.419Zm-1.754 27.552c6.078-3.426 11.69-9.502 12.658-17.63L73.19 36.85c-.382 3.209-2.769 6.415-6.635 8.595l5.893 10.453Zm-21.02 1.793c7.284 3.124 15.055 1.57 21.02-1.793l-5.893-10.453c-3.704 2.088-7.481 2.468-10.398 1.217l-4.73 11.029ZM49 96c0-7.1-2.548-15.022-9.171-19.975l-7.187 9.61C35.36 87.668 37 91.438 37 96h12Zm23.448 40.103c-5.965-3.363-13.736-4.917-21.02-1.793l4.729 11.029c2.917-1.251 6.694-.871 10.398 1.218l5.893-10.454Zm-32.62-20.128C46.452 111.022 49 103.1 49 96H37c0 4.563-1.64 8.333-4.358 10.365l7.187 9.61Zm78.679 19.575c-5.536 3.298-10.517 8.982-11.406 16.446l11.916 1.419c.329-2.765 2.318-5.582 5.632-7.557l-6.142-10.308Zm20.402-1.953c-7.094-3.042-14.669-1.463-20.402 1.953l6.142 10.308c3.382-2.015 6.872-2.372 9.53-1.233l4.73-11.028Zm-53.803 20.135c-.968-8.127-6.58-14.202-12.658-17.629l-5.893 10.454c3.866 2.179 6.253 5.385 6.635 8.594l11.916-1.419ZM141 96c0 6.389 2.398 13.414 8.32 17.842l7.186-9.61C154.374 102.638 153 99.668 153 96h-12Zm8.32-17.842C143.398 82.586 141 89.61 141 96h12c0-3.668 1.374-6.638 3.506-8.232l-7.186-9.61ZM118.507 56.45c5.733 3.416 13.308 4.995 20.401 1.953l-4.729-11.029c-2.658 1.14-6.148.782-9.53-1.233l-6.142 10.31Zm-11.406-16.446c.889 7.464 5.87 13.148 11.406 16.446l6.142-10.309c-3.314-1.974-5.303-4.79-5.632-7.556l-11.916 1.419Z"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M96 120c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24Z"></path></g></svg></div> Settings</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar;