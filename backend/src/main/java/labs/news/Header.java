package labs.news;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Header {

    private String id;
    private String title;
    private String summary;
    private LocalDateTime date;
    private String imageUrl;
    private String source;

}
