import * as React from "react"
import HomePageMockup from "../../images/homepage.png"

const Features = ({ props }) => (
  <section className="text-gray-400 body-font border-t border-gray-200 -mt-1">
    <div className="container px-5 py-16 md:py-24 mx-auto flex flex-wrap justify-center">
      <div className="lg:w-1/2 w-full max-w-md mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="feature"
          className="object-cover object-center h-full w-full"
          src={HomePageMockup}
        />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Search for an ideal job
            </h2>
            <p className="leading-relaxed text-base">
              Nulla irure ex ut consectetur duis Lorem consequat. Duis nostrud
              exercitation occaecat elit nostrud duis deserunt consequat ut qui
              aliquip. Aute laboris cillum amet in tempor fugiat. Ut ea nulla
              occaecat ex do laborum incididunt quis. Incididunt in elit sunt
              nulla culpa. Amet adipisicing ad quis incididunt qui reprehenderit
              ad nulla. Nostrud ullamco minim ipsum excepteur ad cupidatat aute
              minim laboris ex exercitation veniam esse veniam.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-check-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />{" "}
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />{" "}
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Apply for your dream job
            </h2>
            <p className="leading-relaxed text-base">
              Consectetur ad minim amet mollit aliqua ex enim nisi commodo
              cillum nisi fugiat minim quis. Irure magna esse id sunt. Aliqua
              anim sunt sunt id nisi Lorem exercitation eiusmod pariatur cillum.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />{" "}
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Get Notified when selected
            </h2>
            <p className="leading-relaxed text-base">
              Anim ullamco veniam mollit est sint excepteur adipisicing labore
              laboris adipisicing eu veniam. Esse exercitation officia cupidatat
              velit proident irure culpa esse incididunt consectetur do sint
              dolor. Ad aliqua esse consectetur elit esse culpa sit in sit minim
              velit magna magna. Ut excepteur est pariatur reprehenderit. Elit
              qui pariatur nostrud consectetur qui elit aliquip culpa elit est.
              Elit incididunt tempor ullamco cupidatat. Culpa eu ex et ut dolore
              cupidatat sint sunt sint ea cupidatat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Features
