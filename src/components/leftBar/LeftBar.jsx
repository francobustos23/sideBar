import React from 'react'

export const LeftBar = () => {
    return (
            <nav class="sidebar close">

                <header>

                    <div class="text logo">
                        <span class="name">MentalHealth</span>
                        <span class="profe">Desarrollador</span>
                    </div>
                    <i class="bx bx-menu toggle"></i>
                </header>

                <div class="menu-bar">
                    <div class="menu">
                        <li class="search-box">
                            <i class="bx bx-search icon"></i>
                            <input type="text" placeholder="Buscar..." />
                        </li>

                        <ul class="menu-links">
                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-home-alt icon"></i>
                                    <span class="text nav-text">Dashboard</span>
                                </a>
                            </li>

                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-bar-chart-alt-2 icon"></i>
                                    <span class="text nav-text">Ganancia</span>
                                </a>
                            </li>

                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-bell icon"></i>
                                    <span class="text nav-text">Notificaciones</span>
                                </a>
                            </li>

                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-pie-chart-alt icon"></i>
                                    <span class="text nav-text">Analiticas</span>
                                </a>
                            </li>

                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-heart icon"></i>
                                    <span class="text nav-text">Me gustas</span>
                                </a>
                            </li>

                            <li class="nav-link">
                                <a href="#">
                                    <i class="bx bx-wallet icon"></i>
                                    <span class="text nav-text">Carteras</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div class="bottom-content">
                        <li class="">
                            <a href="#">
                                <i class="bx bx-log-out icon"></i>
                                <span class="text nav-text">Salir</span>
                            </a>
                        </li>
                        <li class="mode">
                            <div class="sun-moon">
                                <i class="bx bx-moon icon moon"></i>
                                <i class="bx bx-sun icon sun"></i>
                            </div>
                            <span class="mode-text text">Modo oscuro</span>
                            <div class="toggle-switch">
                                <span class="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
    )
}
