package labs.news;

import com.github.javafaker.Faker;
import lombok.AllArgsConstructor;
import lombok.val;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Component
@AllArgsConstructor
public class NewsFactory {

    public static final String RANDOM_IMAGE_URL = "https://picsum.photos/600/600/?random&";
    private final Faker faker;
    private NewsRepository newsRepository;

    public Header get() {
        val header = new Header();
        header.setId(UUID.randomUUID().toString());
        header.setTitle(faker.lorem().sentence(4, 4));
        header.setSummary(faker.lorem().paragraph(4));
        header.setDate(faker.date().past(10, TimeUnit.HOURS).toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime());
        header.setSource(faker.internet().domainName());
        header.setImageUrl(RANDOM_IMAGE_URL + UUID.randomUUID().toString());

        newsRepository.add(header, StringUtils.join(faker.lorem().paragraphs(4), "\n"));

        return header;
    }

}
