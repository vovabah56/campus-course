import QueueAnim from "rc-queue-anim";
import {Button} from "antd";


export const MainPage = ()=>{
    return(
        <div className="flex gap-20 max-w-[1500px] mx-auto items-center px-5 justify-center mt-[70px] xl:mt-[170px] flex-col xl:flex-row">
            <QueueAnim
                className="text-center "
                delay={300}
                key="banner"
            >
                <h1 key="h1" className="text-5xl">
                    Добро пожаловать
                </h1>
                <p key="p" className="mt-2 text-xl">
                    в систему кампусных курсов
                </p>
                <span key="button">
            <Button
                className="mt-4 w-60"
                size="large"
                type="primary"
                onClick={() => {
                    window.location.href = "/groups";
                }}
            >
              Выбрать курс
            </Button>
          </span>
            </QueueAnim>
        </div>

    )
}