import React from "react";
import "./styles.css";

import Ebook from "../../assests/ebook.svg";
import Download from "../../assests/download.svg";
import Chat from "../../assests/chat.svg";

export default function SocialContent() {
  return (
    <section className="social__content__wrapper">
      {/* <div className="usefull__links">
        <div className="section__header">
          <h2> Usefull Links</h2>
        </div>
        <div className="usefull__links__container">
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Ebook} />
            </div>
            <h3>Ebooks</h3>
          </div>
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Download} />
            </div>
            <h3>Downloads</h3>
          </div>
          <div className="usefull__link__item">
            <div className="item__image__wrapper">
              <img src={Chat} />
            </div>
            <h3>Talk Us</h3>
          </div>
        </div>
      </div> */}
      <div className="social__media">
        <div className="section__header">
          <h2> Socials</h2>
        </div>
        {/* <p>People love what we do! Have a look</p> */}
        <div className="social__media__container">
          <div className="social__media__item">
            <video controls>
              <source
                src="https://instagram.fbho2-1.fna.fbcdn.net/o1/v/t16/f1/m82/2240A298B66752252B535D1DDBEF2FA0_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=104&vs=1376589513106161_1644380010&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8yMjQwQTI5OEI2Njc1MjI1MkI1MzVEMUREQkVGMkZBMF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0drbzVoTW8wZ1EzdzdFQUFOQll4UE56UFZsNWJxX0VBQUFGFQICyAEAKAAYABsAFQAAJsLEgfTWveY%2FFQIoAkMzLBdASkzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfDGrxLtjmsyxv6Eq_ZZ_JqyapaJB6zNjDLLkAc8wFV7bQ&oe=64F4EDE8&_nc_sid=2999b8"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="social__media__item">
            <video controls>
              <source
                src="https://instagram.fbho2-1.fna.fbcdn.net/o1/v/t16/f1/m82/C941D9DB585735EC3017CC4C718C00AF_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=103&vs=924601492088311_127684498&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DOTQxRDlEQjU4NTczNUVDMzAxN0NDNEM3MThDMDBBRl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0NTZENSUmZfNy1tdEtNQ0FHQlJIcWhHMU9jcmJxX0VBQUFGFQICyAEAKAAYABsAFQAAJvrlvb6dz%2FA%2FFQIoAkMzLBdAP5DlYEGJNxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfDmpUiyHLScDqv8X8chwngvIfYZf7xeBZanozrX5G0qbg&oe=64F4FD63&_nc_sid=2999b8"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="social__media__item">
            <video controls>
              <source
                src="https://instagram.fbho2-1.fna.fbcdn.net/o1/v/t16/f1/m82/F340EAAAE3A61D4EBED34F0D3C41C3B9_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=102&vs=711780370637919_2763460670&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GMzQwRUFBQUUzQTYxRDRFQkVEMzRGMEQzQzQxQzNCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0hfMUhoUjZLc2h4WEhnRUFNTGZ6a2ptV3djOWJxX0VBQUFGFQICyAEAKAAYABsAFQAAJtLZkKePoes%2FFQIoAkMzLBdASZU%2FfO2RaBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfCyqhZvaUArls_YC40BL5CaGTKmxuusBlnj1BPzDytWLg&oe=64F45B82&_nc_sid=2999b8"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="social__media__item">
            <video controls>
              <source
                src="https://instagram.fbho2-1.fna.fbcdn.net/o1/v/t16/f1/m82/F340EAAAE3A61D4EBED34F0D3C41C3B9_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=102&vs=711780370637919_2763460670&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GMzQwRUFBQUUzQTYxRDRFQkVEMzRGMEQzQzQxQzNCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0hfMUhoUjZLc2h4WEhnRUFNTGZ6a2ptV3djOWJxX0VBQUFGFQICyAEAKAAYABsAFQAAJtLZkKePoes%2FFQIoAkMzLBdASZU%2FfO2RaBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfCyqhZvaUArls_YC40BL5CaGTKmxuusBlnj1BPzDytWLg&oe=64F45B82&_nc_sid=2999b8"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="social__media__item">
            <video controls>
              <source
                src="https://instagram.fbho2-1.fna.fbcdn.net/o1/v/t16/f1/m82/F340EAAAE3A61D4EBED34F0D3C41C3B9_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=102&vs=711780370637919_2763460670&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GMzQwRUFBQUUzQTYxRDRFQkVEMzRGMEQzQzQxQzNCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0hfMUhoUjZLc2h4WEhnRUFNTGZ6a2ptV3djOWJxX0VBQUFGFQICyAEAKAAYABsAFQAAJtLZkKePoes%2FFQIoAkMzLBdASZU%2FfO2RaBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfCyqhZvaUArls_YC40BL5CaGTKmxuusBlnj1BPzDytWLg&oe=64F45B82&_nc_sid=2999b8"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
