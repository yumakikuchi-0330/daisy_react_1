import React from "react";

function EmployeeCard( {name, job , email, src} ){
  // const mockMember = [
  //   {id: 1 ,
  //     name: "モンキー・D・ルフィ",
  //     job: "キャプテン",
  //     email: "luffy@mugiwara.com",
  //     src: "/luffy.jpeg"
  //   },
  //     {id: 2 ,
  //     name: "ロロノア・ゾロ",
  //     job: "副キャプテン" ,
  //     email: "zoro@mugiwara.com",
  //     src: ""
  //   },
  //     {id: 3 ,
  //     name: "ナミ",
  //     job: "航海士",
  //     email: "nami@mugiwara.com",
  //     src: ""
  //   },
  //     {id: 4 ,
  //     name: "ウソップ",
  //     job: "船大工" ,
  //     email: "sogeking@mugiwara.com",
  //     src: ""
  //   },
  //     {id: 5 ,
  //     name: "トニートニーチョッパ",
  //     job: "医師" ,
  //     email: "chopper@mugiwara.com",
  //     src: ""
  //   },
  //     {id: 6 ,
  //     name: "サンジ",
  //     job: "料理人" ,
  //     email: "sanji@mugiwara.com",
  //     src: ""
  //   },
  //     {id: 7 ,
  //     name: "ニコ・ロビン",
  //     job: "キャプテン" ,
  //     email: "lufffy@mugiwara.com",
  //     src: ""
  //   },
  // ];
  return(
    <div className="container">
      <img className="App-logo" src={src} />
      <div className="profile">
        <p> {name} </p>
        <p> {job} </p>
        <p> {email} </p>
      </div>
    </div>
  )
};

export default EmployeeCard
