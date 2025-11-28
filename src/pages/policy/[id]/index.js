// pages/policy/[slug].js

import Clamp from "@/components/Clamp";
import { PolicyData } from "@/static/PolicyData";
import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = Object.values(PolicyData).flatMap((data) =>
    data.map((item) => ({
      params: { id: item.slug },
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const policyTopic = Object.values(PolicyData).flatMap((data) =>
    data.filter((item) => item.slug === id)
  )[0];

  if (!policyTopic) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      policyTopic,
    },
  };
}

const PolicySlugPage = ({ policyTopic }) => {
  const showImages = ["clinic-policies", "health-card-policy"].includes(
    policyTopic.slug
  );

  return (
    <>
      <Head>
        <title>{policyTopic.topic} | Care4You Medical Centre</title>
      </Head>
      <div className="policy-page">
        <section className="relative bg-gray-50 py-[100px] padding-x">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[14px] md:text-[15px] px-4 py-1 rounded-full font-medium mb-4">
              Policies & Guidelines
            </span>
            <h1
              className="font-bold text-gray-900"
              style={{ fontSize: Clamp(2, 3) }}
            >
              {policyTopic.topic}
            </h1>
            <p className="text-gray-600 mt-4 text-[16px] md:text-[18px] leading-relaxed">
              Important information for patients and visitors
            </p>
          </div>

          {/* Timeline Style */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 w-[3px] h-full bg-green-200"></div>

            <div className="space-y-12">
              {policyTopic.item.map((policy, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow-md">
                    <FaCheckCircle size={20} />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-md p-6 flex-1 hover:shadow-lg transition-all">
                    <h2
                      className="font-bold text-gray-900"
                      style={{ fontSize: Clamp(1.2, 1.6) }}
                    >
                      {policy.title}
                    </h2>
                    <p
                      className="text-gray-700 mt-3 leading-relaxed"
                      style={{
                        whiteSpace: "pre-line",
                        fontSize: Clamp(0.95, 1.05),
                      }}
                    >
                      {policy.description}
                    </p>

                    {showImages && policy.image && (
                      <div className="mt-4 rounded-lg overflow-hidden shadow">
                        <Image
                          src={policy.image}
                          alt="Policy"
                          width={600}
                          height={350}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PolicySlugPage;
