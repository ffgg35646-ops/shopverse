interface PageHeaderProps {
  title: string;
  description?: string;
}


const PageHeader = ({
  title,
  description
}: PageHeaderProps) => {

  return (

    <section className="bg-gray-50 border-b">

      <div className="container mx-auto px-4 py-12 text-center">


        <h1 className="text-3xl md:text-4xl font-bold mb-3">

          {title}

        </h1>



        {description && (

          <p className="text-gray-600 max-w-2xl mx-auto">

            {description}

          </p>

        )}


      </div>

    </section>

  );

};


export default PageHeader;
