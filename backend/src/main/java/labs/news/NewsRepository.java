package labs.news;

import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class NewsRepository {

    private Map<String, Pair<Header, Article>> data = new HashMap<>();

    public Article getArticle(String id) {
        return data.get(id).getRight();
    }

    public void add(Header header, String text){
        data.put(header.getId(), new ImmutablePair<>(header, new Article(header, text)));
    }

}
