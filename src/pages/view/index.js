import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';
import { userLocal } from '../../services/auth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import github from '../../images/github.png';
import linkedln from '../../images/linkedin.png';
import esp from '../../images/esp.png';
import inst from '../../images/inst.png';
import pencil from '../../images/pencil.png';
import formation from '../../images/formation.png';
import skills from '../../images/skills.png';
import estude from '../../images/estude.png';


export default function View() {

    const [list, setList] = useState([]);

    useEffect(() => {
        async function loadList() {
            const response = await api.get("/users");
            setList(response.data);

        }
        loadList();
    });



    return (
        <div>
            <header class="header-portfolio">
                <div class="contaider-header">
                    <h5 class="name-portfolio">PORTFÓLIO</h5>
                    {list && list.map(dados => (
                        <div>
                            <h3 class="name-user-portfolio">{dados.name_user_portfolio}</h3>
                            <div class="name-tecn-user">
                                <h6 class="tec-primary">{dados.activ_primary}  |</h6>
                                <h6 class="tec-second">| {dados.activ_second}</h6>
                                <a href="#contaider-body">
                                    <button class="btn-about">SOBRE</button>
                                </a>
                            </div>
                            <div class="contaider-social">
                                <a href={dados.link_primary}>
                                    <img class="image-github" src={github}></img>
                                </a>
                                <a href={dados.link_second}>
                                    <img class="image-linkedin" src={linkedln}></img>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </header>
            <body>
                <div id="contaider-body" class="contaider-body">
                    <card class="description">
                        {list && list.map(dados => (
                            <div>
                                <h5 class="title-desc">Sobre {dados.name_user_portfolio}</h5>
                                <img class="image-desc-profile" src={dados.link_photo_profile}></img>
                                <text class="text-desc-profile">{dados.desc_profile}</text>
                            </div>
                        ))}
                    </card>
                </div>
                <div class="contaider-info">
                    {list && list.map(dados => (

                        <div>
                            <div class="phrase-profile">
                                <h4 class="title-phrase"><img src={pencil}></img> Frase que me define</h4>
                                <h6 class="phrase">"{dados.phrase_profile}"</h6>

                                <h4 class="title-phrase"><img src={estude}></img> Nome completo</h4>
                                <h6 class="phrase">{dados.name_user_complete}</h6>

                                <h4 class="title-phrase"><img src={esp}></img> Especialização</h4>
                                <h6 class="phrase">{dados.specialization}</h6>

                                <h4 class="title-formation"><img src={formation}></img> Formação acadêmica</h4>
                                <h6 class="phrase">{dados.formation_title}</h6>

                                <h4 class="title-formation"><img src={inst}></img> Instituição</h4>
                                <h6 class="phrase">{dados.formation_name_inst}</h6>
                            </div>
                            <div class="skills">
                                <h4 class="title-formation">SKILLS</h4>


                                <h4 class="title-formation">FRONT-END</h4>
                                <div class="container-skills">
                                    <div class="percentual-skills" style={{ width: (dados.technologies_user_front) }}>
                                        <label class="label-percentual">{dados.technologies_user_front}</label>
                                    </div>
                                </div>
                                <h4 class="title-formation">BACK-END</h4>
                                <div class="container-skills">
                                    <div class="percentual-skills" style={{ width: (dados.technologies_user_back) }}>
                                        <label class="label-percentual">{dados.technologies_user_back}</label>
                                    </div>
                                </div>
                                <h4 class="title-formation">UI/UX</h4>
                                <div class="container-skills">
                                    <div class="percentual-skills" style={{ width: (dados.technologies_user_uiux) }}>
                                        <label class="label-percentual">{dados.technologies_user_uiux}</label>
                                    </div>
                                </div>
                                <h4 class="title-formation" >MOBILE</h4>
                                <div class="container-skills">
                                    <div class="percentual-skills" style={{ width: (dados.technologies_user_mobile) }}>
                                        <label class="label-percentual">{dados.technologies_user_mobile}</label>
                                    </div>
                                </div>
                                <h4 class="title-formation" >DESKTOP</h4>
                                <div class="container-skills">
                                    <div class="percentual-skills" style={{ width: (dados.technologies_user_desktop) }}>
                                        <label class="label-percentual">{dados.technologies_user_desktop}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {list && list.map(dados => (
                    <div class="container-project">
                        <h2 class="title-project">PROJETOS</h2>
                        <div class="project-primary">
                            <h3 class="title_project">{dados.name_project_primary.toUpperCase()}</h3>
                            <img class="contaider_project_images" src={dados.link_photo_project_primary}></img>
                            <a href={dados.link_project_primary}>
                                <button class="btn-view">VER MAIS</button>
                            </a>
                            
                        </div>
                        <div class="project-second">
                            <h3 class="title_project">{dados.name_project_second.toUpperCase()}</h3>
                            <img class="contaider_project_images" src={dados.link_photo_project_scond}></img>
                            <a href={dados.link_project_second}>
                                <button class="btn-view">VER MAIS</button>
                            </a>
                        </div>
                        <div class="project-tree">
                            <h3 class="title_project">{dados.name_project_three.toUpperCase()}</h3>
                            <img class="contaider_project_images" src={dados.link_photo_project_three}></img>
                            <a href={dados.link_project_primary}>
                                <button class="btn-view">VER MAIS</button>
                            </a>
                        </div>
                    </div>
                ))}
            </body>
          
        </div>
    );
}