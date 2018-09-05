package labs.news;

import lombok.Data;

@Data
public class Article extends Header {

    private String text;

    public Article(Header header, String text) {
        this.setDate(header.getDate());
        this.setId(header.getId());
        this.setImageUrl(header.getImageUrl());
        this.setSource(header.getSource());
        this.setSummary(header.getSummary());
        this.setTitle(header.getTitle());
        this.text = text;
    }
}
