import Image from "next/image";
import Link from "next/link";

const Property = ({ item }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mt-5">
        <div className="card shadow">
          <div className="card-header">
            <Link href={`/listing/${item.id}`}>
              <Image
                width={500}
                height={220}
                className="card-img-top"
                src={`/homeImages/${item.image}`}
                alt="Card image"
              />
            </Link>

            <span className="sale badge">For Sale</span>
            <Image
              width={56}
              height={56}
              src="/homeImages/owner1.png"
              alt="owner photo"
              className="owner_photo"
            />
          </div>
          <div className="card-body">
            <Link href={`/listing/${item.id}`}>
              <h4 className="card-title text-dark">{item.name}</h4>
            </Link>
            <p className="card-text text-light">{item.location}</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-3">
                <div className="bed_wrap">
                  <Image
                    width={18}
                    height={18}
                    src={`/homeImages/bed.png`}
                    alt="bed"
                    className="bed"
                  />
                </div>
                <p>{item.beds} Beds</p>
              </div>
              <div className="col-3">
                <div className="bt_wrap">
                  <Image
                    width={18}
                    height={18}
                    src="/homeImages/bath-tub.png"
                    alt="bath tub"
                    className="bath_tub"
                  />
                </div>
                <p>{item.baths} Baths</p>
              </div>
              <div className="col-6 text-right">
                <p className="text-dark">${item.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
