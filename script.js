.portal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
}

.portal:hover {
    background-color: #333;
    color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.portal:active {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
}