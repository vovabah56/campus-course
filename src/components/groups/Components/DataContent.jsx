import React from "react";
import { Breadcrumb, Layout } from "antd";
import useBreadcrumbs from "../../header/useBreadcrumbs.jsx";

// Подключение хука useBreadcrumbs
// Импорт типа ContentProps из файла types

const { Content } = Layout;

const DataContent = ({ title, children }) => {
    // Использование хука useBreadcrumbs
    const { breadcrumbItems } = useBreadcrumbs();

    return (
        <Content className="my-10 mx-8">
            <div className="max-w-screen-2xl mx-auto py-8 px-10 bg-white">
                {/* Отображение хлебных крошек */}
                <Breadcrumb className="mb-7" items={breadcrumbItems} />
                {/* Отображение заголовка */}
                <h1 className="mb-8 xl:text-4xl text-3xl">{title}</h1>
                {/* Отображение дочерних компонентов */}
                {children}
            </div>
        </Content>
    );
};

export default DataContent;
