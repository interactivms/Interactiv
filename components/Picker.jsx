import React, { useEffect } from "react";
import Carousel from "react-grid-carousel";
import PickerItem from "./PickerItem";
import MobilePickerItem from './MobilePickerItem'
import Price from "./Price";

function Picker() {

  const pickerContent = [
    {
      options: [
        {
          title: "¿Necesitas un logotipo para tu negocio?",
          name: "Diseño de identidad",
          text: "Desarrollamos una Identidad de Marca alineada a tus objetivos.",
          img: "/assets/img/Identidad.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
              ],
              price: "$6,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
                {
                  number: "+",
                  text: "Formato Nativo",
                },
                {
                  number: "+",
                  text: "Animación de Logotipo",
                },
              ],
              price: "$10,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 3,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
                {
                  number: "+",
                  text: "Formato Nativo",
                },
                {
                  number: "+",
                  text: "Animación de Logotipo",
                },
                {
                  number: "+",
                  text: "Marca de Audio",
                },
                {
                  number: "+",
                  text: "Manual de Marca",
                },
              ],
              price: "$19,999.00",
            },
          ],
        },
        {
          title: "¡Vas por el camino correcto en tu posicionamiento digital!",
          name: "Diseño y desarrollo web",
          text: "Desarrollamos tu página web conforme a tu identidad y necesidades.",
          img: "/assets/img/Web.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: null,
                  text: "Página web tipo Landing Page",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 1,
                  text: "Mes de mantenimiento a la página web",
                },
                {
                  number: 1,
                  text: "Mes de Hosting incluído",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: 4,
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 3,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 3,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "$13,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: 7,
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 6,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 6,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "$20,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: "X",
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 6,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 6,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "Personalizado",
            },
          ]
        },
      ],
    },
    {
      options: [
        {
          title: "El 72% de los internautas son activos en las redes sociales.",
          name: "Redes sociales",
          text: "Generamos el refuerzo que necesitas e impulsamos tu visión a través de las redes sociales.",
          img: "/assets/img/Social.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: 1,
                  text: "Red Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 6,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 1,
                  text: "Video",
                },
                {
                  number: 1,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: 2,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 8,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 3,
                  text: "Video",
                },
                {
                  number: "$400",
                  text: "en capital para ADS",
                },
                {
                  number: 2,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
              ],
              price: "$9,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: 3,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 12,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 5,
                  text: "Video",
                },
                {
                  number: "$800",
                  text: "en capital para ADS",
                },
                {
                  number: 3,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
                {
                  number: "+",
                  text: "Reportes e Informes",
                },
              ],
              price: "$14,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: 4,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 16,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 6,
                  text: "Video",
                },
                {
                  number: "$1,000",
                  text: "en capital para ADS",
                },
                {
                  number: 4,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
                {
                  number: "+",
                  text: "Reportes e Informes",
                },
                {
                  number: "+",
                  text: "Community Manager",
                },
              ],
              price: "$14,999.00",
            },
          ],
        },
        {
          title:
            "¡Necesidad de videos de alta calidad o trabajos de fotografía para tu negocio. ¡Lo hacemos por ti!",
          name: "Producción Audiovisual",
          text: "Desarrollamos tu página web conforme a tu identidad y necesidades.",
          img: "/assets/img/ProdVisual.png",
          pricing: null
        },
      ],
    },
    {
      options: [
        {
          title:
            "Detrás de una gran página web, hay una gran estrategia de posicionamiento.",
          name: "Campañas de marketing",
          text: "Posicionamos tu página a través de SEO y SEM para que conectes con tu futuro cliente.",
          img: "/assets/img/Marketing.png",
          pricing: [

          ],
        },
      ],
    },
  ];

  const pickerMobileContent = [
    {
      options: [
        {
          title: "¿Necesitas un logotipo para tu negocio?",
          name: "Diseño de identidad",
          text: "Desarrollamos una Identidad de Marca alineada a tus objetivos.",
          img: "/assets/img/Identidad.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
              ],
              price: "$6,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 2,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
                {
                  number: "+",
                  text: "Formato Nativo",
                },
                {
                  number: "+",
                  text: "Animación de Logotipo",
                },
              ],
              price: "$10,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: null,
                  text: "Entrega en imagen",
                },
                {
                  number: 3,
                  text: "Propuestas de logotipo",
                },
                {
                  number: 2,
                  text: "Revisiones o cambios",
                },
                {
                  number: null,
                  text: "Tipografía",
                },
                {
                  number: null,
                  text: "Colores",
                },
                {
                  number: "+",
                  text: "Desarrollo de Imagotipo",
                },
                {
                  number: "+",
                  text: "Diseño de Promocionales",
                },
                {
                  number: "+",
                  text: "Formato Nativo",
                },
                {
                  number: "+",
                  text: "Animación de Logotipo",
                },
                {
                  number: "+",
                  text: "Marca de Audio",
                },
                {
                  number: "+",
                  text: "Manual de Marca",
                },
              ],
              price: "$19,999.00",
            },
          ],
        },
      ],
    },
    {
      options: [
        {
          title: "¡Vas por el camino correcto en tu posicionamiento digital!",
          name: "Diseño y desarrollo web",
          text: "Desarrollamos tu página web conforme a tu identidad y necesidades.",
          img: "/assets/img/Web.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: null,
                  text: "Página web tipo Landing Page",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 1,
                  text: "Mes de mantenimiento a la página web",
                },
                {
                  number: 1,
                  text: "Mes de Hosting incluído",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: 4,
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 3,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 3,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "$13,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: 7,
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 6,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 6,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "$20,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: "X",
                  text: "Vistas Incluídas con tu página web.",
                },
                {
                  number: null,
                  text: "Registro de Dominio (Anual)",
                },
                {
                  number: null,
                  text: "Certificado de Seguridad",
                },
                {
                  number: null,
                  text: "Diseño Responsivo",
                },
                {
                  number: null,
                  text: "Contenido tipo Stock",
                },
                {
                  number: null,
                  text: "Código Optimizado para SEO",
                },
                {
                  number: 6,
                  text: "Meses de mantenimiento a la página web",
                },
                {
                  number: 6,
                  text: "Meses de Hosting incluídos",
                },
              ],
              price: "Personalizado",
            },
          ]
        }
      ],
    },
    {
      options: [
        {
          title: "El 72% de los internautas son activos en las redes sociales.",
          name: "Redes sociales",
          text: "Generamos el refuerzo que necesitas e impulsamos tu visión a través de las redes sociales.",
          img: "/assets/img/Social.png",
          pricing: [
            {
              package: "Básico",
              rows: [
                {
                  number: 1,
                  text: "Red Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 6,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 1,
                  text: "Video",
                },
                {
                  number: 1,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
              ],
              price: "$4,999.00",
            },
            {
              package: "Esencial",
              rows: [
                {
                  number: 2,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 8,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 3,
                  text: "Video",
                },
                {
                  number: "$400",
                  text: "en capital para ADS",
                },
                {
                  number: 2,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
              ],
              price: "$9,999.00",
            },
            {
              package: "Avanzado",
              rows: [
                {
                  number: 3,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 12,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 5,
                  text: "Video",
                },
                {
                  number: "$800",
                  text: "en capital para ADS",
                },
                {
                  number: 3,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
                {
                  number: "+",
                  text: "Reportes e Informes",
                },
              ],
              price: "$14,999.00",
            },
            {
              package: "Empresarial",
              rows: [
                {
                  number: 4,
                  text: "Redes Social",
                },
                {
                  number: 4,
                  text: "Semanas de servicio",
                },
                {
                  number: 16,
                  text: "Publicaciones Mensuales",
                },
                {
                  number: 6,
                  text: "Video",
                },
                {
                  number: "$1,000",
                  text: "en capital para ADS",
                },
                {
                  number: 4,
                  text: "Horas mensuales de planeación",
                },
                {
                  number: null,
                  text: "Diseño de perfil",
                },
                {
                  number: "+",
                  text: "Manejo de Contenido",
                },
                {
                  number: "+",
                  text: "Reportes e Informes",
                },
                {
                  number: "+",
                  text: "Community Manager",
                },
              ],
              price: "$14,999.00",
            },
          ],
        },
      ],
    },
    {
      options: [
        {
          title:
            "¡Necesidad de videos de alta calidad o trabajos de fotografía para tu negocio. ¡Lo hacemos por ti!",
          name: "Producción Audiovisual",
          text: "Desarrollamos tu página web conforme a tu identidad y necesidades.",
          img: "/assets/img/ProdVisual.png",
          pricing: null
        },
      ],
    },
    {
      options: [
        {
          title:
            "Detrás de una gran página web, hay una gran estrategia de posicionamiento.",
          name: "Campañas de marketing",
          text: "Posicionamos tu página a través de SEO y SEM para que conectes con tu futuro cliente.",
          img: "/assets/img/Marketing.png",
          pricing: [

          ],
        },
      ],
    },
  ];


  const [smallScreen, setSmallScreen] = React.useState(false);
  const [selectedPricing, setSelectedPricing] = React.useState(false)
  const [info, setInfo] = React.useState(pickerContent[0].options[0])

  const setPricing = (price) => {
    setSelectedPricing(price)
  }
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 992) {
      setSmallScreen(true);
    }
  }, []);



  return (
    <div className="row mx-0 flex-grow-1">
      <div className="no-mobile">
        <Carousel showDots={true} cols={1} loop={true} dotColorActive="#24806d">
          {pickerContent.map((item, key) => (
            <Carousel.Item key={key}>
              <PickerItem options={item.options} setPricing={setPricing} info={info} setInfo={setInfo} />
            </Carousel.Item>
          ))}
        </Carousel>
        {selectedPricing && (
          <>
            <div className="row mx-0 py-5">
              <h2 className="white text-center">Precios {selectedPricing.name}</h2>
            </div>
            <div className="row mx-0 py-3">

              {selectedPricing.pricing.map((pricing) => {
                return (
                  <Price
                    key={pricing.package}
                    package={pricing.package}
                    rows={pricing.rows}
                    price={pricing.price}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="mobile-only">
        <div className="row mx-0">
        <div className="col d-flex flex-column justify-content-center align-items-center">
        {info && (
          <>
            <h2 className="white subtitle">{info.title}</h2>
            <br />
            <h4 className="white subtitleText">
              {info.text}
            </h4>
            <br />
            {info.pricing ? 
            <>
              <button className="white bg-teal br-25 px-3 py-2 subtitleText" onClick={() => setPricing(info)}>Ver costos</button>
            </>
            :
            <>
              <p className="white">Contáctanos para una cotización personalizada.</p>
            </>}
            <br />
          </>
        )}
      </div>
        </div>
        <Carousel showDots={true} cols={1} loop={true} dotColorActive="#24806d">
          {pickerMobileContent.map((item, key) => (
            <Carousel.Item key={key}>
              <MobilePickerItem options={item.options} setPricing={setPricing} info={info} setInfo={setInfo} />
            </Carousel.Item>
          ))}
        </Carousel>
        {selectedPricing && (
          <>
            <div className="row mx-0 py-5">
              <h2 className="white text-center">Precios {selectedPricing.name}</h2>
            </div>
            <div className="row mx-0 py-3">

              {selectedPricing.pricing.map((pricing) => {
                return (
                  <Price
                    key={pricing.package}
                    package={pricing.package}
                    rows={pricing.rows}
                    price={pricing.price}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Picker;
