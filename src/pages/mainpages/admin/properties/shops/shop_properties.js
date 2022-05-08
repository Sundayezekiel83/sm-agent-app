import SingleProperty from '../../../../../shared/components/myproperties/SingleProperty';
import Home2 from '../../../../../assets/images/home2.jpg';
import Home3 from '../../../../../assets/images/home3.jpg';
import Home4 from '../../../../../assets/images/home4.jpg';
import Home5 from '../../../../../assets/images/home5.jpg';

const ShopProperties = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home5}
        />
      </div>
      <div className="col-lg-4">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home2}
        />
      </div>
      <div className="col-lg-4">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home3}
        />
      </div>
      <div className="col-lg-4">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home4}
        />
      </div>
    </div>
  );
};

export default ShopProperties;
